import Image from "next/image";

export default function ServiceCardIconText() {
  return (
    <div className="border-secondary-light bg-background rounded-card-radius flex flex-col items-center gap-2 border p-6">
      <div>
        <Image src="/icons/home-tree.svg" alt="Icon" width={50} height={50} />
      </div>
      <h3 className="text-body-large text-primary">تطوير الوحدات السكنية</h3>
    </div>
  );
}
