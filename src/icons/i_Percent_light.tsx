const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18 6L6 18" stroke="currentColor" />
    <circle cx="7" cy="8" r="3.5" stroke="currentColor" />
    <circle cx="17" cy="16" r="3.5" stroke="currentColor" />
  </svg>
);
export default SvgComponent;
