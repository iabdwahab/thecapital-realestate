import SignupForm from "@/components/auth/signup/SignupForm";
import Image from "next/image";

export default function SignupPage() {
  return (
    <main className="gradient-bg-inside text-background min-h-screen items-center py-32">
      <div className="container flex flex-col items-center">
        <div>
          <Image src="/logo-aren.png" alt="The Capital Logo" width={206} height={52} />
        </div>

        <h1 className="text-sub-heading md:text-hero mb-4">انضم إلينا</h1>

        <SignupForm />
      </div>
    </main>
  );
}
