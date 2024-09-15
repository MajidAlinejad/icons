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
      d="M3 7C3 5.11438 3 4.17157 3.58579 3.58579C4.17157 3 5.11438 3 7 3H17C18.8856 3 19.8284 3 20.4142 3.58579C21 4.17157 21 5.11438 21 7V17C21 18.8856 21 19.8284 20.4142 20.4142C19.8284 21 18.8856 21 17 21H7C5.11438 21 4.17157 21 3.58579 20.4142C3 19.8284 3 18.8856 3 17V7Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M3 7H6C6.98142 7 7.47214 7 7.89443 7.21115C8.31672 7.42229 8.61115 7.81486 9.2 8.6L9.8 9.4C10.3889 10.1851 10.6833 10.5777 11.1056 10.7889C11.5279 11 12.0186 11 13 11H18C18.9319 11 19.3978 11 19.7654 10.8478C20.2554 10.6448 20.6448 10.2554 20.8478 9.76537C21 9.39782 21 8.93188 21 8V8"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M7 16H15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
