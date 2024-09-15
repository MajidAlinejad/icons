const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx="12"
      cy="13"
      r="7"
      fill="#7E869E"
      fill-opacity="0.25"
      stroke="currentColor"
      stroke-width="1.2"
    />
    <path
      d="M5 5L3 7"
      stroke="currentColor"
      stroke-width="1.2"
      stroke-linecap="round"
    />
    <path
      d="M19 5L21 7"
      stroke="currentColor"
      stroke-width="1.2"
      stroke-linecap="round"
    />
    <path
      d="M9 11L11.8093 12.8729C11.9172 12.9448 12.0622 12.9223 12.1432 12.821L14 10.5"
      stroke="currentColor"
      stroke-width="1.2"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
