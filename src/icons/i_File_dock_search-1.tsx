const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="5"
      y="3"
      width="14"
      height="18"
      rx="2"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <circle cx="15.5" cy="16.5" r="2" stroke="currentColor" />
    <path d="M18 19L19.5 20.5" stroke="currentColor" stroke-linecap="round" />
    <path d="M7.5 6.5L14.5 6.5" stroke="currentColor" stroke-linecap="round" />
    <path d="M7.5 9.5L11.5 9.5" stroke="currentColor" stroke-linecap="round" />
  </svg>
);
export default SvgComponent;
