import Image from "next/image";
import ButtonPrimaryArrow from "../global/ButtonPrimaryArrow";
import GradientCardBorder from "../global/GradientCardBorder";

export default function ProjectCardFull() {
  return (
    <article
      tabIndex={0}
      className="rounded-card-radius group bg-background duration-hover-normal relative z-10 shadow-sm transition hover:-translate-y-2.5 max-lg:focus:-translate-y-2.5"
    >
      {/* This will be visible when hovering */}
      <GradientCardBorder />

      <div className="rounded-t-card-radius relative overflow-hidden">
        <Image
          src="/services/product.png"
          alt="Project Image"
          width={400}
          height={256}
          className="duration-hover-normal h-64 w-full object-cover transition group-hover:scale-125 max-lg:group-focus:scale-125"
        />

        <span className="absolute top-0 left-0 z-10 h-full w-full -bg-linear-30 from-[#546E8380] to-[#0D325180]"></span>
      </div>

      <div className="bg-background duration-hover-normal group-hover:gradient-card-hover-light max-lg:group-focus:gradient-card-hover-light rounded-b-card-radius px-3 pt-3 pb-6 transition">
        <h3 className="text-primary text-body-large mb-2"> برج النفق السكني</h3>
        <div className="text-primary-light flex items-center gap-3">
          <Image src="/icons/location.svg" alt="Icon" width={20} height={20} />
          <span className="text-body-small mb-1 line-clamp-1">جدة، الكورنيش.</span>
        </div>
        <p className="text-primary-light text-body-regular">
          برج تجاري متعدد الاستخدامات يضم مكاتب إدارية ومساحات تجارية
        </p>

        <hr className="bg-secondary-light my-3 h-[0.5px] w-full border-none" />

        <div className="grid grid-cols-2 gap-1 py-3">
          <div>
            <h4 className="text-primary-light text-body-small">الوحدات</h4>
            <p className="text-primary text-body-regular">450 وحدة</p>
          </div>
          <div>
            <h4 className="text-primary-light text-body-small">المساحة</h4>
            <p className="text-primary text-body-regular">95,000 م²</p>
          </div>
        </div>

        <ButtonPrimaryArrow className="w-full" />
      </div>
    </article>
  );
}
