const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx="12"
      cy="12"
      r="8.5"
      fill="#7E869E"
      fillOpacity="0.25"
      stroke="currentColor"
    />
    <path d="M18 18L6 6" stroke="currentColor" />
  </svg>
);
export default SvgComponent;
