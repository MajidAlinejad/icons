const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M7 4L11 9L7 14" stroke="currentColor" stroke-width="2" />
    <path d="M17 10L13 15L17 20" stroke="currentColor" stroke-width="2" />
  </svg>
);
export default SvgComponent;
