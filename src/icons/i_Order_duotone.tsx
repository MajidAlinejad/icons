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
      y="3"
      width="14"
      height="18"
      rx="2"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <path d="M9.5 7.5L14.5 7.5" stroke="currentColor" strokeLinecap="round" />
    <path d="M9.5 10.5L12.5 10.5" stroke="currentColor" strokeLinecap="round" />
    <path d="M9.5 13.5L13.5 13.5" stroke="currentColor" strokeLinecap="round" />
    <path d="M9.5 16.5L12.5 16.5" stroke="currentColor" strokeLinecap="round" />
    <rect x="7" y="7" width="1" height="1" rx="0.5" fill="currentColor" />
    <rect x="7" y="10" width="1" height="1" rx="0.5" fill="currentColor" />
    <rect x="7" y="13" width="1" height="1" rx="0.5" fill="currentColor" />
    <rect x="7" y="16" width="1" height="1" rx="0.5" fill="currentColor" />
  </svg>
);
export default SvgComponent;
