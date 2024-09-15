const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 11L21 11"
      stroke="#2A4157"
      stroke-opacity="0.24"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <rect
      x="3"
      y="6"
      width="18"
      height="13"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="M7 15H7.01"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
