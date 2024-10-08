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
      d="M9 6V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 7C5.89543 7 5 7.89543 5 9V17C5 18.1046 5.89543 19 7 19H17C18.1046 19 19 18.1046 19 17V9C19 7.89543 18.1046 7 17 7H7ZM8.5 10C8.22386 10 8 10.2239 8 10.5C8 10.7761 8.22386 11 8.5 11H15.5C15.7761 11 16 10.7761 16 10.5C16 10.2239 15.7761 10 15.5 10H8.5Z"
      fill="currentColor"
    />
    <path
      d="M7 20H10V21C10 21.5523 9.55228 22 9 22H8C7.44772 22 7 21.5523 7 21V20Z"
      fill="currentColor"
    />
    <path
      d="M14 20H17V21C17 21.5523 16.5523 22 16 22H15C14.4477 22 14 21.5523 14 21V20Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
