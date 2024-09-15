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
      d="M19 19H5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M11 14V10C11 8.89543 10.1046 8 9 8C7.89543 8 7 8.89543 7 10V14C7 15.1046 7.89543 16 9 16C10.1046 16 11 15.1046 11 14Z"
      fill="currentColor"
    />
    <path
      d="M17 14V6C17 4.89543 16.1046 4 15 4C13.8954 4 13 4.89543 13 6V14C13 15.1046 13.8954 16 15 16C16.1046 16 17 15.1046 17 14Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
