import Image from "next/image";

export default function ValueCard() {
  return (
    <div className="bg-background border-secondary-light rounded-[20px] border p-6">
      <div className="gradient-bg-inside mb-2 w-fit rounded-[20px] p-3">
        <Image src="/icons/shield-empty.svg" alt="Sheild Icon" width={50} height={50} />
      </div>
      <div className="text-primary">
        <h3 className="text-body-large mb-1">الشفافية</h3>
        <p className="text-body-small">
          نضــع المســتثمر في قلــب العمليــــة ونوفر وضوحًا في جميع مراحل الاستثمار.
        </p>
      </div>
    </div>
  );
}
