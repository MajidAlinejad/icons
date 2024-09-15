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
      x="5"
      y="7"
      width="14"
      height="10"
      rx="2"
      stroke="currentColor"
      stroke-width="2"
    />
    <rect x="12" y="9" width="5" height="6" rx="1" fill="currentColor" />
  </svg>
);
export default SvgComponent;
