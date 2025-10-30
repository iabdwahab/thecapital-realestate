import PageIntroSection from "@/components/global/PageIntroSection";
import { getPageHeading } from "@/utils/getPageHeading";

export default async function Contact() {
  const pageHeading = await getPageHeading("contact");

  return (
    <>
      <PageIntroSection data={pageHeading} />
    </>
  );
}
