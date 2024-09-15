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
      d="M3 4C3 2.89543 3.89543 2 5 2H19C20.1046 2 21 2.89543 21 4V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V4Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="12"
      cy="11"
      r="5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 11C14 12.5353 13.6867 13.8758 13.2269 14.7954C12.7372 15.7749 12.2456 16 12 16C11.7544 16 11.2628 15.7749 10.7731 14.7954C10.3133 13.8758 10 12.5353 10 11C10 9.46473 10.3133 8.12424 10.7731 7.20457C11.2628 6.22509 11.7544 6 12 6C12.2456 6 12.7372 6.22509 13.2269 7.20457C13.6867 8.12424 14 9.46473 14 11Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgComponent;
