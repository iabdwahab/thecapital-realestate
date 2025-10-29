import Image from "next/image";
import ButtonPrimaryArrow from "../global/ButtonPrimaryArrow";
import GradientCardBorder from "../global/GradientCardBorder";
import { ProjectData } from "@/types/projects";

export default function ProjectCardFull({ data }: { data: ProjectData }) {
  const { title, description, image, location, icon, status, area, units } = data;

  return (
    <article
      tabIndex={0}
      className="rounded-card-radius group bg-background duration-hover-normal relative z-10 shadow-sm transition hover:-translate-y-2.5 max-lg:focus:-translate-y-2.5"
    >
      {/* This will be visible when hovering */}
      <GradientCardBorder />

      <div className="rounded-t-card-radius relative overflow-hidden">
        <Image
          src={image || "/services/product.png"}
          alt="Project Image"
          width={400}
          height={256}
          className="duration-hover-normal h-64 w-full object-cover transition group-hover:scale-125 max-lg:group-focus:scale-125"
        />

        {/* This is the overlay over the image */}
        <span className="absolute top-0 left-0 z-10 h-full w-full -bg-linear-30 from-[#546E8380] to-[#0D325180]"></span>

        {/* This is the status of the project */}
        <span className="bg-primary text-body-small text-background absolute top-3 right-3 z-20 rounded-xl p-3">
          {status}
        </span>

        {/* This is icons square that showed on the top of the image */}
        <span className="absolute top-3 left-3 z-20 rounded-xl bg-[#CBBEB480] p-3">
          <Image
            src={icon || "/icons/home-tree.svg"}
            alt="Icon"
            width={20}
            height={20}
            className="white-svg"
          />
        </span>
      </div>

      <div className="bg-background duration-hover-normal group-hover:gradient-card-hover-light max-lg:group-focus:gradient-card-hover-light rounded-b-card-radius px-3 pt-3 pb-6 transition">
        <h3 className="text-primary text-body-large mb-2"> {title}</h3>
        <div className="text-primary-light flex items-center gap-3">
          <Image src="/icons/location.svg" alt="Icon" width={20} height={20} />
          <span className="text-body-small mb-1 line-clamp-1">{location}</span>
        </div>
        <p className="text-primary-light text-body-regular">{description} </p>

        <hr className="bg-secondary-light my-3 h-[0.5px] w-full border-none" />

        <div className="mb-1 grid grid-cols-2 gap-1 py-3">
          <div>
            <h4 className="text-primary-light text-body-small">الوحدات</h4>
            <p className="text-primary text-body-regular">{units}</p>
          </div>
          <div>
            <h4 className="text-primary-light text-body-small">المساحة</h4>
            <p className="text-primary text-body-regular">{Number(area).toLocaleString()} م²</p>
          </div>
        </div>

        <ButtonPrimaryArrow text="استثمر الآن" className="w-full" />
      </div>
    </article>
  );
}
