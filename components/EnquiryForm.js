'use client';
import { useRef, useState } from 'react';
import Icon from './Icon';
import { APPLICATIONS, ASSIST_TYPES, PRODUCTS } from '@/lib/data';

const CATS = [...PRODUCTS.map((p) => p.name), 'Other / Not Sure'];

/** variant: 'product' (full enquiry) | 'contact' (short enquiry) | 'assistance' */
export default function EnquiryForm({ variant = 'product', defaultCategory = '' }) {
  const ref = useRef(null);
  const [state, setState] = useState({ busy: false, msg: null });
  const full = variant === 'product';

  async function submit(e) {
    e.preventDefault();
    setState({ busy: true, msg: null });
    const fd = new FormData(ref.current); fd.set('type', variant);
    try {
      const r = await fetch('/api/enquiries', { method: 'POST', body: fd });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error);
      ref.current.reset();
      setState({ busy: false, msg: { ok: true, t: 'Thank you! Your request has been submitted. Our team will get back to you soon.' } });
    } catch (err) { setState({ busy: false, msg: { ok: false, t: err.message || 'Could not submit.' } }); }
  }
  const R = <i>*</i>;
  const File = (
    <div className="full"><label>Attach {variant === 'product' ? 'File' : 'Drawing / Specification'} (Optional)</label>
      <input type="file" name="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.dwg" />
      <small style={{ color: 'var(--muted)' }}>{full ? 'Max 10 MB, PDF / DOC / XLS / JPG' : 'PDF, DWG, JPG, PNG (Max. 10 MB)'}</small></div>);
  return (
    <form ref={ref} onSubmit={submit} className="form" encType="multipart/form-data">
      <div className="fg">
        {full && <>
          <div><label>Product Category {R}</label><select name="product_category" defaultValue={defaultCategory || CATS[0]} required>{CATS.map((c) => <option key={c}>{c}</option>)}</select></div>
          <div><label>Application / End Use</label><select name="application" defaultValue=""><option value="">Select Application</option>{APPLICATIONS.map((a) => <option key={a}>{a}</option>)}</select></div>
        </>}
        <div><label>{full ? 'Your Name' : 'Name'} {R}</label><input name="name" required placeholder="Enter your name" /></div>
        <div><label>Company Name</label><input name="company" placeholder="Enter company name" /></div>
        <div><label>Email {full && 'Address'} {R}</label><input type="email" name="email" required placeholder="Enter your email address" /></div>
        {variant === 'assistance' ? null : <div><label>{full ? 'Phone / Mobile Number' : 'Mobile Number'} {R}</label>
          <div className="phone"><select name="country_code" defaultValue="+91"><option>+91</option><option>+1</option><option>+44</option><option>+49</option><option>+971</option><option>+65</option></select><input name="phone" required placeholder="Enter mobile number" /></div></div>}
        {variant === 'assistance' && <div><label>Mobile Number {R}</label><input name="phone" placeholder="Enter your mobile number" required /></div>}
        {full && <><div><label>Quantity (Nos.) {R}</label><input name="quantity" required placeholder="Enter required quantity" /></div>
          <div><label>Required Delivery</label><input type="date" name="delivery_date" /></div></>}
        {variant === 'contact' && <div className="full"><label>Product / Enquiry Type {R}</label><select name="product_category" required defaultValue=""><option value="" disabled>Select Product / Enquiry Type</option>{[...PRODUCTS.map((p) => p.name), 'General Enquiry', 'Technical Support'].map((c) => <option key={c}>{c}</option>)}</select></div>}
        {variant === 'assistance' && <div className="full"><label>Assistance Type {R}</label><select name="product_category" required defaultValue=""><option value="" disabled>Select Assistance Type</option>{ASSIST_TYPES.map((c) => <option key={c}>{c}</option>)}</select></div>}
        <div className="full"><label>{full ? 'Technical Requirements / Specification' : 'Your Requirement'} {R}</label>
          <textarea name="requirement" rows={full ? 4 : 4} required placeholder={full ? 'Please provide details such as Power Rating, Input / Output Voltage, Frequency, Size, Core Type, Mounting, or any other specific requirement.' : variant === 'assistance' ? 'Describe your requirement (e.g., design, specification, modification, application, etc.)' : 'Enter your requirement / specifications'} /></div>
        {File}
      </div>
      <div className="fbar">
        <button className="btn" disabled={state.busy}><Icon name="send" className="" style={{ color: '#fff' }} /> {state.busy ? 'Submitting…' : variant === 'assistance' ? 'Submit Request' : 'Submit Enquiry'}</button>
        <button type="reset" className="btn ghost" onClick={() => setState({ busy: false, msg: null })}><Icon name="refresh" className="" /> Reset</button>
      </div>
      {state.msg && <div className={`msg ${state.msg.ok ? 'ok' : 'err'}`} role="status">{state.msg.t}</div>}
    </form>
  );
}
