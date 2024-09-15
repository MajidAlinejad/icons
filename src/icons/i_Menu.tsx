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
      d="M5 7H19"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
    <path
      d="M5 12H19"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
    <path
      d="M5 17H19"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
