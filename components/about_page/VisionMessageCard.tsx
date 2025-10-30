import Image from "next/image";
import GradientCardBorder from "../global/GradientCardBorder";
import { AboutPageInfoCard } from "@/types/aboutPageInfo";

interface Props {
  data: AboutPageInfoCard | undefined;
}

export default function VisionMessageCard({ data }: Props) {
  return (
    <div
      tabIndex={0}
      className="border-secondary-light group hover:gradient-card-hover-light max-lg:focus:gradient-card-hover-light bg-background rounded-card-radius duration-hover-normal relative flex flex-col items-start gap-2 border p-6 transition"
    >
      <GradientCardBorder />
      <div className="group-hover:gradient-bg-inside duration-hover-normal max-lg:group-focus:gradient-bg-inside rounded-card-radius p-3 transition">
        <Image
          src={data?.icon || `/icons/home-tree.svg`}
          alt="Icon"
          width={50}
          height={50}
          className="group-hover:white-svg max-lg:group-focus:white-svg transition duration-100"
        />
      </div>
      <h3 className="text-body-large text-primary">{data?.title}</h3>
      <p className="text-primary-light text-body-small">{data?.description}</p>
    </div>
  );
}
