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
      x="5"
      y="13"
      width="14"
      height="6"
      rx="2"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <path
      d="M9.5 8.5L12 6M12 6L14.5 8.5M12 6L12 16"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
