import { ProjectData } from "@/types/projects";
import Image from "next/image";

interface Props {
  className?: string;
  data: ProjectData;
}

export default function ProjectCardImageText({ className, data }: Props) {
  const { title, image, location, description, type } = data;

  return (
    <div
      tabIndex={0}
      className={`${className} group rounded-card-radius max-h-[350px] overflow-hidden shadow-sm`}
    >
      <div className="relative h-[350px] max-h-[350px] w-full bg-black transition-all duration-400 group-hover:max-h-[65%] max-lg:group-focus:max-h-[65%]">
        <Image
          src={image || "/services/product.png"}
          alt="Product Image"
          width={350}
          height={350}
          className="rounded-card-radius h-full w-full object-cover"
        />

        <span className="absolute top-0 left-0 z-10 h-full w-full -bg-linear-30 from-[#546E8380] to-[#0D325180]"></span>

        <h3 className="text-sub-heading text-background absolute right-3 bottom-6 z-20 line-clamp-1 w-11/12">
          {title}
        </h3>
      </div>

      <div className="text-primary text-body-small bg-background flex h-full flex-col gap-1 px-3 py-6 group-hover:max-h-[35%] max-lg:group-focus:max-h-[35%]">
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>

          <span className="line-clamp-1">{location}</span>
        </div>
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>

          <span className="line-clamp-1">{description}</span>
        </div>
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>

          <span className="line-clamp-1">{type}.</span>
        </div>
      </div>
    </div>
  );
}
