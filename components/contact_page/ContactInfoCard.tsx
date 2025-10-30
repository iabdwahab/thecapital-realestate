import Image from "next/image";
import GradientCardBorder from "../global/GradientCardBorder";
import { ContactPageInfoCard } from "@/types/contactPageInfo";

interface Props {
  data: ContactPageInfoCard;
}
export default function ContactInfoCard({ data }: Props) {
  return (
    <article
      tabIndex={0}
      className="border-secondary-light group hover:gradient-card-hover-light max-lg:focus:gradient-card-hover-light bg-background rounded-card-radius duration-hover-normal relative flex flex-col items-center gap-2 border p-6 transition"
    >
      <GradientCardBorder />

      <div className="gradient-bg-inside duration-hover-normal rounded-card-radius p-3 transition">
        <Image
          src={data.icon || `/icons/home-tree.svg`}
          alt="Icon"
          width={50}
          height={50}
          className="white-svg transition duration-100"
        />
      </div>
      <h3 className="text-body-large text-primary">{data.title}</h3>
      <p className="text-primary-light text-body-small text-center">{data.description}</p>
    </article>
  );
}
