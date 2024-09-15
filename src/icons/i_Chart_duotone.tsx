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
      x="3"
      y="4"
      width="18"
      height="16"
      rx="2"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <path
      d="M8 10L8 16"
      stroke="currentColor"
      stroke-width="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 12V16"
      stroke="currentColor"
      stroke-width="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 8V16"
      stroke="currentColor"
      stroke-width="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgComponent;
