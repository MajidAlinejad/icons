const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="9" fill="#7E869E" fillOpacity="0.25" />
    <path d="M8 12H16" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);
export default SvgComponent;
