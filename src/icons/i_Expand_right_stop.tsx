const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M7 6L13 12L7 18" stroke="currentColor" strokeWidth="2" />
    <path d="M18 7V17" stroke="currentColor" strokeWidth="2" />
  </svg>
);
export default SvgComponent;
