import Image from "next/image";
import GradientCardBorder from "../global/GradientCardBorder";
import ButtonPrimaryArrow from "../global/ButtonPrimaryArrow";
import { ServiceData } from "@/types/services";
import Link from "next/link";

export default function ServiceCardFull({
  data,
  className,
}: {
  data: ServiceData;
  className?: string;
}) {
  const { icon, title, description, image, card_link } = data;

  return (
    <article
      tabIndex={0}
      className={`${className} rounded-card-radius group bg-background duration-hover-normal relative z-10 flex flex-col shadow-sm transition hover:-translate-y-2.5 max-lg:focus:-translate-y-2.5`}
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

        {/* This is icons square that showed on the top of the image */}
        <span className="absolute right-3 bottom-3 z-20 rounded-xl bg-[#CBBEB480] p-3">
          <Image
            src={icon || "/icons/home-tree.svg"}
            alt="Icon"
            width={20}
            height={20}
            className="white-svg"
          />
        </span>
      </div>

      <div className="bg-background duration-hover-normal group-hover:gradient-card-hover-light max-lg:group-focus:gradient-card-hover-light rounded-b-card-radius flex flex-1 flex-col px-3 pt-3 pb-6 transition">
        <h3 className="text-body-large text-primary mb-2">{title}</h3>
        <p className="text-body-small text-primary-light mb-5">{description}</p>

        <hr className="border-secondary-light mt-auto mb-5" />

        <Link
          href={card_link?.href || "/contact"}
          className="btn-primary flex w-full items-center justify-center gap-2 text-center"
        >
          {card_link?.text || "اطلب الخدمة الآن"}
          <span>
            <Image
              src="/icons/arrow-up.svg"
              alt="Arrow Icon"
              width={20}
              height={20}
              className="-rotate-90"
            />
          </span>
        </Link>
      </div>
    </article>
  );
}
