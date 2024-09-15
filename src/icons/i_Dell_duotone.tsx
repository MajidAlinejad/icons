const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="9" fill="#7E869E" fill-opacity="0.25" />
    <path
      d="M9.00012 14.9996L15.0001 8.99963"
      stroke="currentColor"
      stroke-width="1.2"
    />
    <path d="M15 15L9 9" stroke="currentColor" stroke-width="1.2" />
  </svg>
);
export default SvgComponent;
