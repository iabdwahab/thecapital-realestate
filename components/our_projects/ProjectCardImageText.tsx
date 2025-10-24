import Image from "next/image";

export default function ProjectCardImageText() {
  return (
    <div tabIndex={0} className="group rounded-card-radius max-h-[350px] overflow-hidden shadow-sm">
      <div className="relative h-[350px] max-h-[350px] w-full bg-black transition-all duration-400 group-hover:max-h-[65%] max-lg:group-focus:max-h-[65%]">
        <Image
          src="/services/product.png"
          alt="Product Image"
          width={350}
          height={350}
          className="rounded-card-radius h-full w-full object-cover"
        />

        <span className="absolute top-0 left-0 z-10 h-full w-full -bg-linear-30 from-[#546E8380] to-[#0D325180]"></span>

        <h3 className="text-sub-heading text-background absolute right-3 bottom-6 z-20 line-clamp-1 w-11/12">
          برج النفق السكني
        </h3>
      </div>

      <div className="text-primary text-body-small bg-background flex h-full flex-col gap-1 px-3 py-6 group-hover:max-h-[35%] max-lg:group-focus:max-h-[35%]">
        <div className="flex items-center gap-3">
          <Image src="/icons/location.svg" alt="Icon" width={20} height={20} />
          <span className="line-clamp-1">جدة، الكورنيش.</span>
        </div>
        <div className="flex items-center gap-3">
          <Image src="/icons/location.svg" alt="Icon" width={20} height={20} />
          <span className="line-clamp-1">فيلا فاخرة 85.</span>
        </div>
        <div className="flex items-center gap-3">
          <Image src="/icons/location.svg" alt="Icon" width={20} height={20} />
          <span className="line-clamp-1">سكني.</span>
        </div>
      </div>
    </div>
  );
}
