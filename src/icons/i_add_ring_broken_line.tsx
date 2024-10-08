const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 16L13 10"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="square"
    />
    <path
      d="M16 13L10 13"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="square"
    />
    <path
      d="M17.8565 6.02226C14.5419 3.70963 9.94716 4.03209 6.98962 6.98963C3.67016 10.3091 3.67017 15.691 6.98962 19.0104C10.3091 22.3299 15.691 22.3299 19.0104 19.0104C21.968 16.0529 22.2904 11.4581 19.9778 8.14358"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
