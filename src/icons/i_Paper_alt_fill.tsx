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
      d="M16 16.5C16 17.8807 17.1193 19 18.5 19C19.8807 19 21 17.8807 21 16.5V7C21 6.44771 20.5523 6 20 6H16.5C16.2239 6 16 6.22386 16 6.5V16.5Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 17.5V6C15 4.89543 14.1046 4 13 4H5C3.89543 4 3 4.89543 3 6V17C3 18.6569 4.34315 20 6 20H17.5C16.1193 20 15 18.8807 15 17.5ZM6 6H12C12.5523 6 13 6.44772 13 7V9C13 9.55228 12.5523 10 12 10H6C5.44772 10 5 9.55228 5 9V7C5 6.44772 5.44772 6 6 6Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
