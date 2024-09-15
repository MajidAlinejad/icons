const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 12L14 16L10 20" stroke="currentColor" />
    <path
      d="M20 13.5V10C20 8.89543 19.1046 8 18 8H6C4.89543 8 4 8.89543 4 10V14C4 15.1046 4.89543 16 6 16H13"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
