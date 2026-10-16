import { useState } from 'react';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { propertyTypes } from '@/data/content';
import type { ContactInquiry } from '@/types';

export function ContactForm() {
  const [form, setForm] = useState<ContactInquiry>({
    full_name: '',
    email: '',
    phone: '',
    property_type: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const { error } = await supabase.from('contact_inquiries').insert({
        full_name: form.full_name,
        email: form.email,
        phone: form.phone,
        property_type: form.property_type || null,
        message: form.message,
      });

      if (error) throw error;

      setStatus('success');
      setForm({ full_name: '', email: '', phone: '', property_type: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again or contact us directly.'
      );
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-8 shadow-lg border border-gray-100 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#0a1f3c] mb-2">Inquiry Submitted!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-navy"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  const inputClass =
    'w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-[#0a1f3c] focus:border-[#c9a84a] focus:outline-none focus:ring-1 focus:ring-[#c9a84a] transition-all';
  const labelClass = 'text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2 block';

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 shadow-lg border border-gray-100 space-y-5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="full_name">
            Full Name *
          </label>
          <input
            id="full_name"
            name="full_name"
            type="text"
            required
            value={form.full_name}
            onChange={handleChange}
            className={inputClass}
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="john@example.com"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
            placeholder="+91 98765 43210"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="property_type">
            Property Type
          </label>
          <select
            id="property_type"
            name="property_type"
            value={form.property_type}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select Type</option>
            {propertyTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className={labelClass} htmlFor="message">
          Inquiry Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={inputClass}
          placeholder="Tell us about your requirements..."
        />
      </div>

      {status === 'error' && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 p-4">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-700">{errorMsg}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-gold w-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Submit Inquiry
          </>
        )}
      </button>
    </form>
  );
}
