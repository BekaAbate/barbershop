import { ContactInfo } from "@/data/contact";

export default function ContactCard({
  icon: Icon,
  title,
  details,
}: ContactInfo) {
  return (
    <div className="flex flex-col items-center text-center">
      <Icon className="mb-6 h-8 w-8 text-primary" />

      <h3 className="mb-3 text-[20px] font-normal font-serif uppercase text-black">
        {title}
      </h3>

      <div className="space-y-1 text-sm text-black font-sans opacity-80">
        {details.map((detail) => (
          <p key={detail}>{detail}</p>
        ))}
      </div>
    </div>
  );
}
