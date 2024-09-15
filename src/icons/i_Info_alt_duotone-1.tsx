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
      cx="8"
      cy="8"
      r="8"
      transform="matrix(-1 0 0 1 20 4)"
      fill="#7E869E"
      fillOpacity="0.25"
    />
    <path
      d="M11 10.5H11.5C11.7761 10.5 12 10.7239 12 11V15C12 15.2761 12.2239 15.5 12.5 15.5H13M12 8.5H12.01"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgComponent;
