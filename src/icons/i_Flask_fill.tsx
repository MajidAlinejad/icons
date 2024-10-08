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
      d="M7 9H17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 9V18.0004C15 19.6573 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V9H15ZM13 15.0548V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V15.0548C11 15.0245 11.0245 15 11.0548 15H12.9452C12.9755 15 13 15.0245 13 15.0548Z"
      fill="currentColor"
    />
    <circle
      cx="15"
      cy="4"
      r="1"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle
      cx="8.5"
      cy="5.5"
      r="1"
      fill="currentColor"
      stroke="currentColor"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgComponent;
