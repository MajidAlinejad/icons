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
      d="M11 21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21H11ZM11 19V21H13V19H11Z"
      fill="currentColor"
    />
    <path
      d="M6.45119 15.3415L12 9L17.5488 15.3415C18.1146 15.9881 17.6554 17 16.7962 17H7.20377C6.34461 17 5.88543 15.9881 6.45119 15.3415Z"
      fill="currentColor"
    />
    <path
      d="M7.44 9.08L11.2 4.06667C11.6 3.53333 12.4 3.53333 12.8 4.06667L16.56 9.08C17.1533 9.87108 16.5889 11 15.6 11H8.4C7.41115 11 6.84669 9.87108 7.44 9.08Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
