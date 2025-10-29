import Image from "next/image";
import GradientCardBorder from "../global/GradientCardBorder";
import { PartnerData } from "@/types/partners";

export default function PartnerCard({ data }: { data: PartnerData }) {
  const { icon, name, partnership_field } = data;

  return (
    <article
      tabIndex={0}
      className="rounded-card-radius group hover:gradient-card-hover-light max-lg:focus:gradient-card-hover-light duration-hover-normal bg-background border-secondary-light relative flex flex-col items-center gap-2 border p-6 shadow-sm transition"
    >
      <GradientCardBorder />

      <div className="group-hover:bg-primary max-lg:group-focus:bg-primary duration-hover-normal rounded-card-radius p-3 transition">
        <Image src={icon || "/icons/bank.png"} alt="Icon" width={50} height={50} className="" />
      </div>
      <h3 className="text-body-large text-primary">{name}</h3>
      <p className="text-body-small text-primary-light">{partnership_field}</p>
    </article>
  );
}
