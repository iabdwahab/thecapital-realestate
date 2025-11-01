import LoginForm from "@/components/auth/login/LoginForm";
import Image from "next/image";

export default function LoginPage() {
  return (
    <main className="gradient-bg-inside text-background min-h-screen items-center py-32">
      <div className="container flex flex-col items-center">
        <div>
          <Image src="/logo-aren.png" alt="The Capital Logo" width={206} height={52} />
        </div>

        <h1 className="text-sub-heading md:text-hero mb-4">مرحبًا بعودتك</h1>

        <LoginForm />
      </div>
    </main>
  );
}
