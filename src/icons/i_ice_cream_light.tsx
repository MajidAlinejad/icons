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
      d="M7.5 7C7.5 4.51472 9.51472 2.5 12 2.5V2.5C14.4853 2.5 16.5 4.51472 16.5 7V15.5H7.5V7Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.5 15.5V19.5C13.5 20.3284 12.8284 21 12 21V21C11.1716 21 10.5 20.3284 10.5 19.5V15.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 8V11"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgComponent;
