const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="9.5" stroke="currentColor" />
    <circle cx="12" cy="12" r="6.5" stroke="currentColor" />
    <rect x="9.5" y="8" width="5" height="4" rx="2" stroke="currentColor" />
    <rect x="9.5" y="12" width="5" height="4" rx="2" stroke="currentColor" />
  </svg>
);
export default SvgComponent;
