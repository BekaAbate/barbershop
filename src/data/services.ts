import BeardIcon from "@/components/icons/BeardIcon";
import FacialIcon from "@/components/icons/FacialIcon";
import HairIcon from "@/components/icons/HairIcon";
import MustacheIcon from "@/components/icons/MustacheIcon";
import RazorIcon from "@/components/icons/RazorIcon";
import ScissorsIcon from "@/components/icons/ScissorsIcon";
import { ComponentType } from "react";

export interface service {
  icon: ComponentType<{
    className?: string;
  }>;
  title: string;
  description: string;
}

export const services: service[] = [
  {
    icon: HairIcon,
    title: "HAIR STYLING",
    description:
      "Duis porta, ligula rhoncuseuism od pretium, nisi tellus eleifend odio, luctus viverra sem.",
  },
  {
    icon: ScissorsIcon,
    title: "HAIRCUT & BEARD TRIM",
    description:
      "Duis porta, ligula rhoncuseuism od pretium, nisi tellus eleifend odio, luctus viverra sem.",
  },
  {
    icon: BeardIcon,
    title: "FACIAL & SHAVE",
    description:
      "Duis porta, ligula rhoncuseuism od pretium, nisi tellus eleifend odio, luctus viverra sem.",
  },
  {
    icon: FacialIcon,
    title: "FACIAL",
    description:
      "Duis porta, ligula rhoncuseuism od pretium, nisi tellus eleifend odio, luctus viverra sem.",
  },
  {
    icon: MustacheIcon,
    title: "MUSTACHE TRIMMING",
    description:
      "Duis porta, ligula rhoncuseuism od pretium, nisi tellus eleifend odio, luctus viverra sem.",
  },
  {
    icon: RazorIcon,
    title: "SHAVES & HAIRCUT",
    description:
      "Duis porta, ligula rhoncuseuism od pretium, nisi tellus eleifend odio, luctus viverra sem.",
  },
];
