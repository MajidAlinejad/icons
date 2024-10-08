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
      x="7"
      y="6"
      width="10"
      height="15"
      rx="1.5"
      fill="#7E869E"
      fillOpacity="0.25"
    />
    <rect x="8" y="15" width="8" height="5" rx="1" fill="currentColor" />
    <rect
      x="9"
      y="3"
      width="6"
      height="2"
      rx="1"
      fill="#7E869E"
      fillOpacity="0.25"
    />
  </svg>
);
export default SvgComponent;
