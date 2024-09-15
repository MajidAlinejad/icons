const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="4" fill="currentColor" />
    <path
      d="M21 12C21 12 20 4 12 4C4 4 3 12 3 12"
      stroke="currentColor"
      stroke-width="2"
    />
  </svg>
);
export default SvgComponent;
