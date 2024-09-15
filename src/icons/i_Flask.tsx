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
      d="M15 9C15 9 15 14.24 15 18.0004C15 19.6573 13.6569 21 12 21V21C10.3431 21 9 19.6569 9 18V9"
      stroke="currentColor"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <path
      d="M7 9H17"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13 18V15.0548C13 15.0245 12.9755 15 12.9452 15H11.0548C11.0245 15 11 15.0245 11 15.0548V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18Z"
      fill="currentColor"
    />
    <circle
      cx="15"
      cy="4"
      r="1"
      fill="currentColor"
      stroke="currentColor"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <circle
      cx="8.5"
      cy="5.5"
      r="1"
      fill="currentColor"
      stroke="currentColor"
      stroke-linejoin="round"
    />
  </svg>
);
export default SvgComponent;
