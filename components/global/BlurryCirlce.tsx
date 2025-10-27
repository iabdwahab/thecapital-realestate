// Hey, you must give the parent a z-index.

interface Props {
  className?: string;
}
export default function BlurryCirlce({ className }: Props) {
  return (
    <span
      className={`${className} bg-background absolute -z-10 h-[500px] w-[500px] rounded-full opacity-10 blur-3xl`}
    ></span>
  );
}
