import ClockIcon from "@/components/icons/ClockIcon";
import EmailIcon from "@/components/icons/EmailIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import { ComponentType } from "react";
export interface ContactInfo {
  icon: ComponentType<{
    className?: string;
  }>;
  title: string;
  details: string[];
}

export const contactInfo: ContactInfo[] = [
  {
    icon: LocationIcon,
    title: "Address",
    details: ["304 North Cardinal St.", "Dorchester Center, MA 02124"],
  },
  {
    icon: EmailIcon,
    title: "Email",
    details: ["info@company.com"],
  },
  {
    icon: PhoneIcon,
    title: "Phone",
    details: ["(+63) 666 1212", "(+63) 555 1212"],
  },
  {
    icon: ClockIcon,
    title: "Working Hours",
    details: ["Mon - Fri: 10am - 6pm", "Sat - Sun: 10am - 6pm"],
  },
];
