import Image from "next/image";

interface Props {
  title: string;
  description: string;
}

export default function PageIntroSection({ title, description }: Props) {
  return (
    <main className="text-background from-primary to-primary-light relative bg-linear-to-b text-center">
      <div className="container flex min-h-screen flex-col items-center justify-center">
        <div>
          <Image src="/logo-aren.png" alt="The Capital Logo" width={206} height={52} />
        </div>
        <h1 className="text-sub-heading md:text-hero mb-2">{title}</h1>
        <p className="text-body-regular md:text-sub-heading mb-6 max-w-[800px]">{description}</p>
        {/* <button className="btn-secondary text-cta min-h-[58px] min-w-[270px]">استكشف حلولنا</button> */}
      </div>
    </main>
  );
}
