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
      x="5"
      y="5"
      width="14"
      height="12"
      rx="3"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M8 4C8 3.05719 8 2.58579 8.29289 2.29289C8.58579 2 9.05719 2 10 2H14C14.9428 2 15.4142 2 15.7071 2.29289C16 2.58579 16 3.05719 16 4V5H8V4Z"
      fill="currentColor"
    />
    <path
      d="M8 20C8 20.9428 8 21.4142 8.29289 21.7071C8.58579 22 9.05719 22 10 22H14C14.9428 22 15.4142 22 15.7071 21.7071C16 21.4142 16 20.9428 16 20V17H8V20Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
