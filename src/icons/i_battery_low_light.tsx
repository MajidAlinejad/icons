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
      x="7.5"
      y="6.5"
      width="9"
      height="14"
      rx="1.5"
      stroke="currentColor"
    />
    <rect x="9" y="16" width="6" height="3" rx="0.8" fill="currentColor" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.29289 3.29289C9 3.58579 9 4.05719 9 5H15C15 4.05719 15 3.58579 14.7071 3.29289C14.4142 3 13.9428 3 13 3H11C10.0572 3 9.58579 3 9.29289 3.29289Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
