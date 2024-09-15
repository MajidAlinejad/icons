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
      r="8.4"
      stroke="#7E869E"
      strokeOpacity="0.25"
      strokeWidth="1.2"
    />
    <path
      d="M16 8L8 16"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M8 8L16 16"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgComponent;
