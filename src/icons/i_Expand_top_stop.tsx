const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18 17L12 11L6 17" stroke="currentColor" stroke-width="2" />
    <path d="M7 6L17 6" stroke="currentColor" stroke-width="2" />
  </svg>
);
export default SvgComponent;
