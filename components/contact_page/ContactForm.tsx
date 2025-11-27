"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

// Define the shape of your form data for better type safety
interface ContactFormData {
  "full-name": string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const {
    register, // The main function to connect inputs to RHF
    handleSubmit,
    formState: { errors, isSubmitting }, // Get submission status and validation errors
  } = useForm<ContactFormData>({
    defaultValues: {
      "full-name": "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // The submit handler now receives the validated data
  async function onSubmit(data: ContactFormData) {
    // Prepare the FormData object for the Contact Form 7 endpoint
    const finalFormData = new FormData();
    finalFormData.append("full-name", data["full-name"]);
    finalFormData.append("email", data.email);
    finalFormData.append("phone", data.phone);
    finalFormData.append("message", data.message);
    finalFormData.append("_wpcf7_unit_tag", "wpcf7-f507-p123-o1");

    // 3. Send the request
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/contact-form-7/v1/contact-forms/507/feedback`,
        {
          method: "POST",
          body: finalFormData,
        },
      );

      const responseData = await res.json();

      if (responseData.status === "mail_sent") {
        toast.success("تم إرسال رسالتك بنجاح!", { position: "top-right" });

        // Reset the form after successful submission
      } else {
        toast.error(`فشل في إرسال الرسالة: ${responseData.message}`, { position: "top-right" });
      }
    } catch (error) {
      toast.error("حدث خطأ غير متوقع أثناء الإرسال.", { position: "top-right" });
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)} // RHF's handleSubmit wraps your onSubmit function
      className="rounded-card-radius border-secondary-light text-primary -6 flex flex-col gap-0 border p-8 shadow-sm"
    >
      {/* --- Full Name Field --- */}
      <div className="flex flex-col gap-0">
        <label htmlFor="full-name" className="text-body-large mb-2">
          الاسم كامل
        </label>
        <input
          type="text"
          id="full-name"
          placeholder="أدخل اسمك بالكامل"
          className={`text-primary-light outline-primary-light text-body-small mb-1 rounded-xl border p-3 ${
            errors["full-name"] ? "border-red-500" : "border-primary" // Highlight error border
          }`}
          // *** RHF Integration: Use the register function with validation rules ***
          {...register("full-name", { required: "يجب إدخال الاسم." })}
        />
        {/* Display validation error message */}

        <p className={`${errors["full-name"] ? "visible" : "invisible"} text-sm text-red-500`}>
          {errors["full-name"] ? errors["full-name"].message : "يجب إدخال الاسم."}
        </p>
      </div>

      {/* --- Email Field --- */}
      <div className="flex flex-col gap-0">
        <label htmlFor="email" className="text-body-large mb-2">
          البريد الإلكتروني
        </label>
        <input
          type="email"
          id="email"
          placeholder="أدخل بريدك الإلكتروني"
          className={`text-primary-light text-body-small outline-primary-light mb-1 rounded-xl border p-3 ${
            errors.email ? "border-red-500" : "border-primary"
          }`}
          // *** RHF Integration: Use the register function with validation rules ***
          {...register("email", {
            required: "البريد الإلكتروني مطلوب",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "صيغة البريد الإلكتروني غير صالحة",
            },
          })}
        />
        <p className={`${errors.email ? "visible" : "invisible"} text-sm text-red-500`}>
          {errors.email ? errors.email.message : "يجب إدخال البريد الإلكتروني."}
        </p>
      </div>

      {/* --- Phone Field (Required) --- */}
      <div className="flex flex-col gap-0">
        <label htmlFor="phone" className="text-body-large mb-2">
          رقم الهاتف
        </label>
        <input
          type="tel"
          id="phone"
          placeholder="أدخل رقم الهاتف الخاص بك "
          className={`text-primary-light text-body-small outline-primary-light mb-1 rounded-xl border p-3 ${
            errors.phone ? "border-red-500" : "border-primary"
          }`}
          // *** RHF Integration: Use the register function ***
          {...register("phone", {
            required: "يجب إدخال رقم الهاتف.",
            // You can add a pattern rule for specific phone number formats here
            pattern: {
              value: /^[0-9+\-() ]+$/,
              message: "صيغة رقم الهاتف غير صالحة",
            },
            minLength: {
              value: 7,
              message: "رقم الهاتف قصير جدًا.",
            },
          })}
        />

        <p className={`${errors["phone"] ? "visible" : "invisible"} text-sm text-red-500`}>
          {errors["phone"] ? errors["phone"].message : "يجب إدخال رقم الهاتف."}
        </p>
      </div>

      {/* --- Message Field --- */}
      <div className="mb-6 flex flex-col gap-0">
        <label htmlFor="message" className="text-body-large mb-2">
          الرسالة
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="أدخل ما تريد إرساله لنا"
          className={`text-primary-light text-body-small outline-primary-light mb-1 rounded-xl border p-3 ${
            errors.message ? "border-red-500" : "border-primary"
          }`}
          // *** RHF Integration: Use the register function ***
          {...register("message", { required: "يجب إدخال الرسالة." })}
        />

        <p className={`${errors["message"] ? "visible" : "invisible"} text-sm text-red-500`}>
          {errors["message"] ? errors["message"].message : "يجب إدخال الرسالة."}
        </p>
      </div>

      <button
        className="btn-primary"
        type="submit"
        disabled={isSubmitting} // Disable button while the form is submitting
      >
        {isSubmitting ? "جاري الإرسال..." : "إرسال"}
      </button>
    </form>
  );
}
