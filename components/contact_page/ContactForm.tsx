"use client";

export default function ContactForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="rounded-card-radius border-secondary-light text-primary flex flex-col gap-6 border p-8 shadow-sm"
    >
      <div className="flex flex-col gap-3">
        <label htmlFor="name" className="text-body-large">
          الاسم كامل
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="أدخل اسمك بالكامل"
          className="text-primary-light outline-primary-light text-body-small border-primary rounded-xl border p-3"
        />
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor="email" className="text-body-large">
          البريد الإلكتروني
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="أدخل بريدك الإلكتروني"
          className="text-primary-light text-body-small outline-primary-light border-primary rounded-xl border p-3"
        />
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor="phone" className="text-body-large">
          رقم الهاتف
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="أدخل رقم الهاتف الخاص بك "
          className="text-primary-light text-body-small outline-primary-light border-primary rounded-xl border p-3"
        />
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor="message" className="text-body-large">
          الرسالة
        </label>
        <textarea
          name="message"
          id="message"
          rows={5}
          placeholder="أدخل ما تريد إرساله لنا"
          className="text-primary-light text-body-small outline-primary-light border-primary rounded-xl border p-3"
        />
      </div>

      <button className="btn-primary">إرسال</button>
    </form>
  );
}
