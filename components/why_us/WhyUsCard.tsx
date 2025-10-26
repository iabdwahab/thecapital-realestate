import { WhyUsReasonData } from "@/types/whyUs";
import GradientCardBorder from "../global/GradientCardBorder";
import IconGradientCard from "../global/IconGradientCard";

interface Props {
  className?: string;
  data: WhyUsReasonData;
}

export default function WhyUsCard({ className, data }: Props) {
  const { id, title, description, icon } = data;

  return (
    <div
      tabIndex={0}
      className={`${className} bg-background max-lg:focus:gradient-card-hover-light hover:gradient-card-hover-light rounded-card-radius group duration-hover-normal relative grid grid-cols-[64px_1fr] gap-5 p-6 transition`}
    >
      <GradientCardBorder />
      <div>
        <IconGradientCard icon={icon} />
      </div>
      <div>
        <h3 className="text-body-large text-primary mb-2">{title}</h3>
        <p className="text-body-small text-primary-light">{description}</p>
      </div>
    </div>
  );
}
