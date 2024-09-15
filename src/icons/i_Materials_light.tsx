const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 7L10 3L21 7M3 7V12L14 16L21 12V7M3 7L14 11L21 7"
      stroke="currentColor"
      strokeLinejoin="round"
    />
    <path
      d="M3 12V17L14 21L21 17V12"
      stroke="currentColor"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgComponent;
