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
      rx="3"
      ry="3"
      transform="rotate(90 7 7)"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <path
      d="M9.5 5H18C19.1046 5 20 5.89543 20 7V7C20 8.10457 19.1046 9 18 9H9.5"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <ellipse
      cx="3"
      cy="3"
      rx="3"
      ry="3"
      transform="matrix(4.37114e-08 1 1 -4.37114e-08 14 14)"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <path
      d="M14.5 15H6C4.89543 15 4 15.8954 4 17V17C4 18.1046 4.89543 19 6 19H14.5"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
