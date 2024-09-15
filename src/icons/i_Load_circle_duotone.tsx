const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <ellipse
      cx="6"
      cy="6"
      rx="6"
      ry="6"
      transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 18 20)"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <path
      d="M9.5 12.5L12 15M12 15L14.5 12.5M12 15L12 5"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
