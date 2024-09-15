const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="15"
      y="9"
      width="6"
      height="6"
      rx="2"
      transform="rotate(-90 15 9)"
      stroke="currentColor"
    />
    <path d="M6 21L3 17L6 13" stroke="currentColor" />
    <path
      d="M3 17H10C13.7712 17 15.6569 17 16.8284 15.8284C18 14.6569 18 12.7712 18 9V9"
      stroke="currentColor"
    />
  </svg>
);
export default SvgComponent;
