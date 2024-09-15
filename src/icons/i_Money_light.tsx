const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" />
    <path d="M5 9H8" stroke="currentColor" stroke-linecap="round" />
    <path d="M16 15H19" stroke="currentColor" stroke-linecap="round" />
    <circle cx="12" cy="12" r="2" stroke="currentColor" />
  </svg>
);
export default SvgComponent;
