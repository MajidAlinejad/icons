const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="9" cy="14" r="4" stroke="currentColor" stroke-width="2" />
    <path
      d="M12 11L15.5 7.5M17 6L15.5 7.5M15.5 7.5L18 10"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
