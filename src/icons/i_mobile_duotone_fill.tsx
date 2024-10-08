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
      y="1"
      width="14"
      height="22"
      rx="2"
      fill="#2A4157"
      fillOpacity="0.24"
    />
    <path d="M9.5 3.5H14.5" stroke="currentColor" strokeLinecap="round" />
    <circle cx="12" cy="20" r="1" fill="currentColor" />
  </svg>
);
export default SvgComponent;
