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
      cx="7"
      cy="7"
      rx="7"
      ry="7"
      transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 20 19)"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <path
      d="M11.5 9.5L14 12M14 12L11.5 14.5M14 12H4"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
