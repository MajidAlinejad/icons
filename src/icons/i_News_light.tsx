const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="5" y="5" width="14" height="14" rx="3" stroke="currentColor" />
    <path d="M5 10L19 10" stroke="currentColor" stroke-linecap="round" />
  </svg>
);
export default SvgComponent;
