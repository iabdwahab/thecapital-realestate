import Image from "next/image";

export default function InfoSide() {
  return (
    <div className="flex flex-col gap-8 lg:max-w-[420px]">
      <div className="">
        <Image
          src="/footer/footer-logo.png"
          alt="The Capital Logo"
          width={420}
          height={105}
          className="object-cover max-lg:mx-auto"
        />
      </div>
      <h4 className="text-body-large mx-auto max-w-[700px] text-[#CCD1D2] max-lg:text-center">
        شركة رائدة في مجال التطوير العقاري والاستثمار، نقدم حلولاً عقارية متكاملة تلبي تطلعاتكم
        وتساهم في تطوير القطاع العقاري.
      </h4>
    </div>
  );
}
