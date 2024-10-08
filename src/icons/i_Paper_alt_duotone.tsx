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
      d="M15 17.5C15 18.8807 16.1193 20 17.5 20C18.8807 20 20 18.8807 20 17.5V8C20 7.44771 19.5523 7 19 7H15.5C15.2239 7 15 7.22386 15 7.5V17.5Z"
      fill="currentColor"
    />
    <path
      d="M15 6V17.5C15 18.8807 16.1193 20 17.5 20H7C5.34315 20 4 18.6569 4 17V6C4 4.89543 4.89543 4 6 4H13C14.1046 4 15 4.89543 15 6Z"
      fill="#2A4157"
      fillOpacity="0.24"
    />
    <path
      d="M12 6H7C6.44772 6 6 6.44772 6 7V9C6 9.55228 6.44772 10 7 10H12C12.5523 10 13 9.55228 13 9V7C13 6.44772 12.5523 6 12 6Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
