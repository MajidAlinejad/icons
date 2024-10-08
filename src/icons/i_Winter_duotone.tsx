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
      r="2.4"
      fill="#7E869E"
      fillOpacity="0.25"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="M12 9V7M12 4V7M12 7L9 5M12 7L15 5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M15 12L17 12M20 12L17 12M17 12L19 9M17 12L19 15"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M12 15V17M12 20V17M12 17L9 19M12 17L15 19"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M9 12L7 12M4 12L7 12M7 12L5 9M7 12L5 15"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
