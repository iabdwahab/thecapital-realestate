"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface LoginFormInputs {
  email: string;
  password: string;
}

export default function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  function onSubmit(data: LoginFormInputs) {
    if (data.email === "admin@thecapital.sa" && data.password === "adminpassword") {
      router.push("http://wp.thecapital.sa/wp-admin/");
    } else {
      setError("root", { message: "بيانات تسجيل الدخول غير صحيحة." });
    }
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-card-radius border-primary w-full max-w-3xl border px-8 py-8 shadow-sm md:px-16"
    >
      <div className="mb-3 flex flex-col gap-3">
        <label htmlFor="email" className="text-body-large">
          البريد الإلكتروني
        </label>
        <input
          type="text"
          id="email"
          {...register("email", {
            required: "يجب إدخال بريد إلكتروني صالح.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "بريد إلكتروني غير صالح.",
            },
            onChange: () => clearErrors("root"),
          })}
          placeholder="أدخل بريدك الإلكتروني"
          className="text-secondary-light bg-background/5 outline-primary-light text-body-small border-secondary-light rounded-xl border p-3"
        />

        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div className="mb-16 flex flex-col gap-3">
        <label htmlFor="password" className="text-body-large">
          كلمة المرور
        </label>
        <input
          type="password"
          {...register("password", {
            required: "يجب إدخال كلمة المرور.",
            minLength: { value: 6, message: "يجب أن تكون كلمة المرور أكثر من 6 حروف." },
            onChange: () => clearErrors("root"),
          })}
          id="password"
          placeholder="أدخل كلمة المرور"
          className="text-secondary-light bg-background/5 outline-primary-light text-body-small border-secondary-light rounded-xl border p-3"
        />

        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      </div>

      <button className="btn-secondary mb-10 w-full">تسجيل الدخول</button>

      <p className={`text-center text-red-500 ${errors?.root?.message ? "" : "invisible"}`}>
        {errors?.root?.message || "."}
      </p>

      {/* <p className="text-body-large text-center">
        ليس لديك حساب؟{" "}
        <Link href="/signup" className="font-bold underline underline-offset-8">
          إنشاء حساب
        </Link>
      </p> */}
    </form>
  );
}
