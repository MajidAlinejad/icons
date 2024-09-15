const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="7"
      y="7"
      width="10"
      height="10"
      rx="3"
      stroke="currentColor"
      stroke-width="2"
    />
    <path
      d="M9 4C9 3.05719 9 2.58579 9.29289 2.29289C9.58579 2 10.0572 2 11 2H13C13.9428 2 14.4142 2 14.7071 2.29289C15 2.58579 15 3.05719 15 4V7H9V4Z"
      fill="currentColor"
    />
    <path
      d="M9 20C9 20.9428 9 21.4142 9.29289 21.7071C9.58579 22 10.0572 22 11 22H13C13.9428 22 14.4142 22 14.7071 21.7071C15 21.4142 15 20.9428 15 20V17H9V20Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
