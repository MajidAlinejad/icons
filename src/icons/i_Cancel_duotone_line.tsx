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
      r="9"
      stroke="#7E869E"
      stroke-opacity="0.25"
      stroke-width="1.2"
    />
    <path
      d="M16 16L8 8"
      stroke="currentColor"
      stroke-width="1.2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
