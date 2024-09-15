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
      cy="12"
      r="8.5"
      fill="#2A4157"
      fill-opacity="0.24"
      stroke="currentColor"
    />
    <path
      d="M16 8L8 16"
      stroke="currentColor"
      stroke-width="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 8L16 16"
      stroke="currentColor"
      stroke-width="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgComponent;
