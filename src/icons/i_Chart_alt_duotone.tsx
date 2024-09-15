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
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <path
      d="M18 8L14.1047 12.8691C14.0488 12.9389 13.9447 12.9447 13.8815 12.8815L11.1161 10.1161C11.0538 10.0538 10.9513 10.0584 10.8948 10.1262L6 16"
      stroke="currentColor"
      stroke-width="1.2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export default SvgComponent;
