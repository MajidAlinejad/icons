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
      d="M2.5 10.5H8.5C9.60457 10.5 10.5 11.3954 10.5 12.5V14.5C10.5 16.1569 9.15685 17.5 7.5 17.5H4.5C3.39543 17.5 2.5 16.6046 2.5 15.5V10.5Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.5 12.5C13.5 11.3954 14.3954 10.5 15.5 10.5H21.5V15.5C21.5 16.6046 20.6046 17.5 19.5 17.5H16.5C14.8431 17.5 13.5 16.1569 13.5 14.5V12.5Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 10.5L4.5 6.5H6.5M21.5 10.5L19.5 6.5H17.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 12.5L11.3675 12.2108C11.7781 12.074 12.2219 12.074 12.6325 12.2108L13.5 12.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgComponent;
