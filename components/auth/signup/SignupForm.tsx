"use client";

import Link from "next/link";

export default function SignupForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="rounded-card-radius border-primary w-full max-w-3xl border px-8 py-8 shadow-sm md:px-16"
    >
      <div className="mb-3 flex flex-col gap-3">
        <label htmlFor="name" className="text-body-large">
          الاسم بالكامل
        </label>
        <input
          type="name"
          name="name"
          id="name"
          placeholder="أدخل اسمك الكامل"
          className="text-secondary-light bg-background/5 outline-primary-light text-body-small border-secondary-light rounded-xl border p-3"
        />
      </div>

      <div className="mb-3 flex flex-col gap-3">
        <label htmlFor="email" className="text-body-large">
          البريد الإلكتروني
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="أدخل بريدك الإلكتروني"
          className="text-secondary-light bg-background/5 outline-primary-light text-body-small border-secondary-light rounded-xl border p-3"
        />
      </div>

      <div className="mb-3 flex flex-col gap-3">
        <label htmlFor="password" className="text-body-large">
          كلمة المرور
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="أدخل كلمة المرور"
          className="text-secondary-light bg-background/5 outline-primary-light text-body-small border-secondary-light rounded-xl border p-3"
        />
      </div>

      <div className="mb-16 flex flex-col gap-3">
        <label htmlFor="repassword" className="text-body-large">
          تأكيد كلمة المرور
        </label>
        <input
          type="password"
          name="repassword"
          id="repassword"
          placeholder="أدخل كلمة المرور"
          className="text-secondary-light bg-background/5 outline-primary-light text-body-small border-secondary-light rounded-xl border p-3"
        />
      </div>

      <button className="btn-secondary mb-16 w-full">إنشاء حساب</button>

      <p className="text-body-large text-center">
        لديك حساب بالفعل؟{" "}
        <Link href="/login" className="font-bold underline underline-offset-8">
          تسجيل الدخول
        </Link>
      </p>
    </form>
  );
}
