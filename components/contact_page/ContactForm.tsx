"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    "full-name": "",
    email: "",
    phone: "",
    message: "",
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Handle form submission logic here

    const finalFormData = new FormData();
    finalFormData.append("full-name", formData["full-name"]);
    finalFormData.append("email", formData.email);
    finalFormData.append("phone", formData.phone);
    finalFormData.append("message", formData.message);
    finalFormData.append("_wpcf7_unit_tag", "wpcf7-f507-p123-o1");

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/contact-form-7/v1/contact-forms/507/feedback`,
      {
        method: "POST",

        body: finalFormData,
      },
    );

    const data = await res.json();

    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-card-radius border-secondary-light text-primary flex flex-col gap-6 border p-8 shadow-sm"
    >
      <div className="flex flex-col gap-3">
        <label htmlFor="name" className="text-body-large">
          الاسم كامل
        </label>
        <input
          type="text"
          name="full-name"
          id="full-name"
          value={formData["full-name"]}
          onChange={(e) => setFormData({ ...formData, "full-name": e.target.value })}
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
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="أدخل ما تريد إرساله لنا"
          className="text-primary-light text-body-small outline-primary-light border-primary rounded-xl border p-3"
        />
      </div>

      <button className="btn-primary">إرسال</button>
    </form>
  );
}
