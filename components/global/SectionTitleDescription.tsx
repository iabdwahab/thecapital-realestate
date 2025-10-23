interface Props {
  title: string;
  description: string;
}

export default function SectionTitleDescription({ title, description }: Props) {
  return (
    <>
      <h2 className="text-sub-heading lg:text-heading text-primary mb-3">{title}</h2>
      <p className="text-body-small lg:text-body-large text-primary-light mb-8 text-justify opacity-80">
        {description}
      </p>
    </>
  );
}
