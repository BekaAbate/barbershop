import BarbershopIcon from "@/components/icons/BarbershopIcon";
import ScissorsIcon from "@/components/icons/ScissorsIcon";
import ShaverIcon from "@/components/icons/ShaverIcon";
import { ComponentType } from "react";

export interface count {
  icon: ComponentType<{
    className?: string;
  }>;
  label: string;
  count: string;
}

export const counts: count[] = [
  {
    icon: ShaverIcon,
    label: "shaves",
    count: "2500",
  },
  {
    icon: ScissorsIcon,
    label: "haircuts",
    count: "4500",
  },
  {
    icon: BarbershopIcon,
    label: "open shops",
    count: "23",
  },
];
