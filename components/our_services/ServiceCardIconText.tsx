import Image from "next/image";

export default function ServiceCardIconText() {
  return (
    <div
      tabIndex={0}
      className="border-secondary-light group hover:gradient-card-hover-light focus:gradient-card-hover-light bg-background rounded-card-radius relative flex flex-col items-center gap-2 border p-6 transition duration-300"
    >
      <span className="rounded-card-radius group-hover:gradient-card-light-border group-focus:gradient-card-light-border absolute top-[5px] -z-10 h-full w-full transition duration-300"></span>

      <div className="group-hover:gradient-bg-inside group-focus:gradient-bg-inside rounded-card-radius p-3">
        <Image
          src="/icons/home-tree.svg"
          alt="Icon"
          width={50}
          height={50}
          className="group-hover:white-svg group-focus:white-svg transition duration-100"
        />
      </div>
      <h3 className="text-body-large text-primary">تطوير الوحدات السكنية</h3>
    </div>
  );
}
