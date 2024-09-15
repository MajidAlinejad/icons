const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="6"
      y="3"
      width="12"
      height="16"
      rx="6"
      fill="#7E869E"
      fill-opacity="0.25"
      stroke="currentColor"
      stroke-width="1.2"
      strokeLinejoin="round"
    />
    <path
      d="M12 22V19"
      stroke="currentColor"
      stroke-width="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 13H7"
      stroke="currentColor"
      stroke-width="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 13H16"
      stroke="currentColor"
      stroke-width="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 9H7"
      stroke="currentColor"
      stroke-width="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 9H16"
      stroke="currentColor"
      stroke-width="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgComponent;
