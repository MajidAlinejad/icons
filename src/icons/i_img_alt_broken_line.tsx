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
      d="M5 13.5L2.38114 17.2412C2.00998 17.7715 2.38931 18.5 3.03652 18.5H13.9635C14.6107 18.5 14.99 17.7715 14.6189 17.2412L9.15539 9.43627C8.8369 8.98129 8.1631 8.98129 7.84461 9.43627L6.75 11"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M10.5 18.5H19.0566C19.685 18.5 20.068 17.8088 19.735 17.276L16.1784 11.5854C15.8651 11.0841 15.1349 11.0841 14.8216 11.5854L13.9375 13"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <circle
      cx="17"
      cy="6"
      r="1.5"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
