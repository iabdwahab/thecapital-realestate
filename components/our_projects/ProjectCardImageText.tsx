import Image from "next/image";

export default function ProjectCardImageText() {
  return (
    <div>
      <div className="rounded-card-radius relative h-[350px] w-full overflow-hidden bg-black">
        <Image
          src="/services/product.png"
          alt="Product Image"
          width={350}
          height={350}
          className="rounded-card-radius h-full w-full object-cover"
        />

        <span className="absolute top-0 left-0 z-10 h-full w-full -bg-linear-30 from-[#546E8380] to-[#0D325180]"></span>

        <h3 className="text-sub-heading text-background absolute right-3 bottom-6 z-20">
          برج النفق السكني
        </h3>
      </div>
    </div>
  );
}
