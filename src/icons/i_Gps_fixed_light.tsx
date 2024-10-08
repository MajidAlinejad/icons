const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="7" stroke="currentColor" />
    <circle cx="12" cy="12" r="2" fill="currentColor" stroke="currentColor" />
    <path d="M12 5V3" stroke="currentColor" strokeLinecap="round" />
    <path d="M19 12L21 12" stroke="currentColor" strokeLinecap="round" />
    <path d="M12 21L12 19" stroke="currentColor" strokeLinecap="round" />
    <path d="M3 12H5" stroke="currentColor" strokeLinecap="round" />
  </svg>
);
export default SvgComponent;
