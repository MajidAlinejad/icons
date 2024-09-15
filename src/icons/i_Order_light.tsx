const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="5" y="4" width="14" height="17" rx="2" stroke="currentColor" />
    <path d="M9 9H15" stroke="currentColor" stroke-linecap="round" />
    <path d="M9 13H15" stroke="currentColor" stroke-linecap="round" />
    <path d="M9 17H13" stroke="currentColor" stroke-linecap="round" />
  </svg>
);
export default SvgComponent;
