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
      d="M5.5 9.5H18.5"
      stroke="#2A4157"
      stroke-opacity="0.24"
      strokeLinecap="round"
    />
    <rect
      x="5.5"
      y="5.5"
      width="13"
      height="13"
      rx="2.5"
      stroke="currentColor"
    />
  </svg>
);
export default SvgComponent;
