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
      d="M4 9.3C4 9.15858 4 9.08787 4.04393 9.04393C4.08787 9 4.15858 9 4.3 9H19.7C19.8414 9 19.9121 9 19.9561 9.04393C20 9.08787 20 9.15858 20 9.3V15C20 16.8856 20 17.8284 19.4142 18.4142C18.8284 19 17.8856 19 16 19H8C6.11438 19 5.17157 19 4.58579 18.4142C4 17.8284 4 16.8856 4 15V9.3Z"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <path
      d="M2 7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V7C22 7.55228 21.5523 8 21 8H3C2.44772 8 2 7.55228 2 7V7Z"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <rect x="9" y="12" width="6" height="1" rx="0.5" fill="currentColor" />
  </svg>
);
export default SvgComponent;
