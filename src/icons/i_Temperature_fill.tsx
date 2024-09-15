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
      d="M9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V11.5001C15 11.8146 15.1524 12.1061 15.3839 12.319C16.3774 13.2328 17 14.5437 17 16C17 18.7614 14.7614 21 12 21C9.23858 21 7 18.7614 7 16C7 14.5437 7.62259 13.2328 8.61612 12.319C8.8476 12.1061 9 11.8146 9 11.5001V6ZM11 6L11 13H13L13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
