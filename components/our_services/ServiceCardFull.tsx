import Image from "next/image";
import GradientCardBorder from "../global/GradientCardBorder";
import ButtonPrimaryArrow from "../global/ButtonPrimaryArrow";
import { ServiceData } from "@/types/services";

export default function ServiceCardFull({ data }: { data: ServiceData }) {
  const { icon, title, description, image } = data;

  return (
    <article
      tabIndex={0}
      className="rounded-card-radius group bg-background duration-hover-normal relative z-10 shadow-sm transition hover:-translate-y-2.5 max-lg:focus:-translate-y-2.5"
    >
      {/* This will be visible when hovering */}
      <GradientCardBorder />

      <div className="rounded-t-card-radius relative overflow-hidden">
        <Image
          src={image ? image : "/services/product.png"}
          alt="Service Image"
          width={400}
          height={500}
          className="duration-hover-normal h-64 w-full object-cover transition group-hover:scale-125 max-lg:group-focus:scale-125"
        />

        <span className="absolute top-0 left-0 z-10 h-full w-full -bg-linear-30 from-[#546E8380] to-[#0D325180]"></span>
      </div>

      <div className="bg-background duration-hover-normal group-hover:gradient-card-hover-light max-lg:group-focus:gradient-card-hover-light rounded-b-card-radius px-3 pt-3 pb-6 transition">
        <h3 className="text-body-large text-primary mb-2">{title}</h3>
        <p className="text-body-small text-primary-light">{description}</p>

        <hr className="border-secondary-light my-5" />

        <ButtonPrimaryArrow text="اطلب الخدمة الآن" className="w-full p-3" />
      </div>
    </article>
  );
}
