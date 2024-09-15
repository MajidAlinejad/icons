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
      x="4"
      y="6"
      width="16"
      height="12"
      rx="2"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <path
      d="M4 16V9.24271C4 9.1312 4.11735 9.05867 4.21708 9.10854L10.6584 12.3292C11.5029 12.7515 12.4971 12.7515 13.3416 12.3292L19.7829 9.10854C19.8827 9.05867 20 9.1312 20 9.24271V16C20 17.1046 19.1046 18 18 18H6C4.89543 18 4 17.1046 4 16Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
