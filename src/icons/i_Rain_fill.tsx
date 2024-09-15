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
      d="M6 14H12H18C19.6569 14 21 12.6569 21 11C21 9.34315 19.6569 8 18 8C17.36 8 16.826 7.53873 16.5639 6.95481C15.7822 5.21307 14.0328 4 12 4C9.96722 4 8.21776 5.21308 7.43606 6.95481C7.17399 7.53873 6.64004 8 6 8C4.34315 8 3 9.34315 3 11C3 12.6569 4.34315 14 6 14Z"
      fill="currentColor"
    />
    <path
      d="M12 19V17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M17 20V17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M7 21V17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
