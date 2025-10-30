import { ContactPageInfoCard } from "@/types/contactPageInfo";
import ContactInfoCard from "./ContactInfoCard";

interface Props {
  data: ContactPageInfoCard[] | undefined;
}

export default function ContactInfoCardsContainer({ data }: Props) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {data && data.map((card, index) => <ContactInfoCard key={index} data={card} />)}
    </div>
  );
}
