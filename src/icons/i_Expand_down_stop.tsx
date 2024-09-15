const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6 7L12 13L18 7" stroke="currentColor" stroke-width="2" />
    <path d="M17 18L7 18" stroke="currentColor" stroke-width="2" />
  </svg>
);
export default SvgComponent;
