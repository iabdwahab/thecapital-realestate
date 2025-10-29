"use client";

export default function SubscribtionForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center justify-center gap-3 max-md:flex-col"
    >
      <input
        type="email"
        name=""
        id=""
        className="bg-background text-primary placeholder:text-primary-light/50 hover:bg-background/90 duration-hover-fast border-background w-full rounded-xl border p-3 font-semibold transition outline-none md:max-w-[445px]"
        placeholder="أدخل بريدك الإلكتروني"
      />
      <button type="submit" className="btn-secondary max-md:w-full">
        اشترك الآن
      </button>
    </form>
  );
}
