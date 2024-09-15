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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 21H12H18C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C17.7205 15 17.5807 15 17.483 14.9803C17.185 14.9204 17.0435 14.8288 16.8667 14.5814C16.8088 14.5004 16.7272 14.3185 16.5639 13.9548C15.7822 12.2131 14.0328 11 12 11C9.96722 11 8.21776 12.2131 7.43606 13.9548C7.27282 14.3185 7.19121 14.5004 7.13328 14.5814C6.95652 14.8288 6.81502 14.9204 6.51699 14.9803C6.41931 15 6.27954 15 6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z"
      fill="#7E869E"
      fillOpacity="0.25"
    />
    <path
      d="M9.5 7.5L12 5M12 5L14.5 7.5M12 5L12 15"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
