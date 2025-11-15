import { OurStorySectionInfo } from "@/types/aboutPageInfo";
import Image from "next/image";

interface Props {
  data: OurStorySectionInfo | undefined;
}

function OurStorySection({ data }: Props) {
  return (
    <section className="grid gap-12 lg:grid-cols-2">
      <div>
        <h2 className="text-sub-heading lg:text-heading text-primary mb-3">{data?.title}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: data?.description || "" }}
          className="text-body-small lg:text-body-large text-primary-light mb-8 text-justify opacity-80"
        ></div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          src={data?.image || "/placeholders/news.jpg"}
          alt="Hero Image"
          width={1024}
          height={1024}
          className="border-secondary-light w-full max-w-full rounded-xl border object-cover"
        />

        {data?.vision_image && (
          <Image
            src={data.vision_image}
            alt="Vision 2030 Logo"
            width={238}
            height={162}
            className="max-w-[200px] -translate-y-1/2 rounded-xl object-cover shadow-lg"
          />
        )}
      </div>
    </section>
  );
}
export default OurStorySection;
