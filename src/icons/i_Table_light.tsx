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
      d="M15 9H21V18C21 18.9428 21 19.4142 20.7071 19.7071C20.4142 20 19.9428 20 19 20H15V9Z"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M3 9H9V20H5C4.05719 20 3.58579 20 3.29289 19.7071C3 19.4142 3 18.9428 3 18V9Z"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <rect
      x="9"
      y="9"
      width="6"
      height="11"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M3 6C3 5.05719 3 4.58579 3.29289 4.29289C3.58579 4 4.05719 4 5 4H19C19.9428 4 20.4142 4 20.7071 4.29289C21 4.58579 21 5.05719 21 6V9H3V6Z"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
