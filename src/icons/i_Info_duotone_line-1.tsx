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
      cx="10"
      cy="10"
      r="9.5"
      transform="matrix(-1 0 0 1 22 2)"
      stroke="#2A4157"
      strokeOpacity="0.24"
    />
    <path
      d="M12 12L12 18"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="square"
    />
    <path
      d="M12 7L12 6"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="square"
    />
  </svg>
);
export default SvgComponent;
