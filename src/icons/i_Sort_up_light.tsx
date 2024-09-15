const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M5 16H13" stroke="currentColor" stroke-linecap="round" />
    <path d="M5 12H11" stroke="currentColor" stroke-linecap="round" />
    <path d="M5 8H9" stroke="currentColor" stroke-linecap="round" />
    <path d="M19 6L22 9M19 6L16 9M19 6L19 18" stroke="currentColor" />
  </svg>
);
export default SvgComponent;
