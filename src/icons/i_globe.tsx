const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="2" />
    <ellipse
      cx="12"
      cy="12"
      rx="3"
      ry="8"
      stroke="currentColor"
      stroke-width="2"
    />
    <path
      d="M4 12H20"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
