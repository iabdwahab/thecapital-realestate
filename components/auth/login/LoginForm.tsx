"use client";

import Link from "next/link";

export default function LoginForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="rounded-card-radius border-primary w-full max-w-3xl border px-8 py-8 shadow-sm md:px-16"
    >
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

      <div className="mb-16 flex flex-col gap-3">
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

      <button className="btn-secondary mb-16 w-full">تسجيل الدخول</button>

      <p className="text-body-large text-center">
        ليس لديك حساب؟{" "}
        <Link href="signup" className="font-bold underline underline-offset-8">
          إنشاء حساب
        </Link>
      </p>
    </form>
  );
}
