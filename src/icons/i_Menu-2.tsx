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
      x="4"
      y="5"
      width="16"
      height="5"
      rx="1"
      stroke="currentColor"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <rect
      x="4"
      y="14"
      width="16"
      height="5"
      rx="1"
      stroke="currentColor"
      stroke-width="2"
      stroke-linejoin="round"
    />
  </svg>
);
export default SvgComponent;
