import { FooterInfoSide, SocialMediaAccount } from "@/types/footerInfo";
import Image from "next/image";
import Link from "next/link";

interface Props {
  socialMediaAccounts: Record<string, SocialMediaAccount> | undefined;
  infoSide: FooterInfoSide | undefined;
}

export default function InfoSide({ socialMediaAccounts, infoSide }: Props) {
  // Filter founded accounts
  let socialMediaAccountsList: SocialMediaAccount[] = [];

  if (socialMediaAccounts) {
    const values = Object.values(socialMediaAccounts);

    socialMediaAccountsList = values.filter((account) => account.logo && account.href);
  }
  ////////////////

  return (
    <div className="flex flex-col gap-8 lg:max-w-[420px]">
      <div className="">
        <Image
          src={infoSide?.logo || "/footer/footer-logo.png"}
          alt="The Capital Logo"
          width={420}
          height={105}
          className="object-cover max-lg:mx-auto"
        />
      </div>
      <h4 className="text-body-large mx-auto max-w-[700px] text-[#CCD1D2] max-lg:text-center">
        {infoSide?.description}
      </h4>

      <ul className="flex items-center gap-3 max-lg:justify-center">
        {socialMediaAccountsList.map((account, index) => {
          return (
            <li key={index}>
              <Link
                href={account.href}
                className="flex rounded-full bg-[#F8F8F81A] p-3 transition duration-150 hover:bg-[#f8f8f828]"
              >
                <Image
                  src={account.logo || "/logos/facebook.png"}
                  alt="Social Media Logo"
                  width={20}
                  height={20}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
