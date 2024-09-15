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
      x="7"
      y="6"
      width="10"
      height="15"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <rect x="9" y="8" width="6" height="11" rx="0.8" fill="currentColor" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.29289 1.29289C9 1.58579 9 2.05719 9 3H15C15 2.05719 15 1.58579 14.7071 1.29289C14.4142 1 13.9428 1 13 1H11C10.0572 1 9.58579 1 9.29289 1.29289Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
