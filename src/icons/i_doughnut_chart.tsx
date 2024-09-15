const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2" />
    <path
      d="M12 3V7.5M18 18L15 15M18 6L15 9M3 12H7.5"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
