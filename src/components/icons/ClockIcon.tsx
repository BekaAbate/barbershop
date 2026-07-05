interface IconProps {
  className?: string;
}
export default function ClockIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 27 27"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 26C20.4036 26 26 20.4036 26 13.5C26 6.59644 20.4036 1 13.5 1C6.59644 1 1 6.59644 1 13.5C1 20.4036 6.59644 26 13.5 26Z"
        stroke="#E9C664"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.125 6.66699V12.667L18.125 14.667"
        stroke="#E9C664"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
