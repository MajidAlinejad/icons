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
      d="M17 20C17 18.6739 16.4732 17.4021 15.5355 16.4645C14.5979 15.5268 13.3261 15 12 15C10.6739 15 9.40215 15.5268 8.46447 16.4645C7.52678 17.4021 7 18.6739 7 20L12 20H17Z"
      fill="#7E869E"
      fillOpacity="0.25"
    />
    <path
      d="M7.6 20C7.6 18.833 8.06357 17.7139 8.88873 16.8887C9.71389 16.0636 10.833 15.6 12 15.6C13.167 15.6 14.2861 16.0636 15.1113 16.8887C15.9364 17.7139 16.4 18.833 16.4 20"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="M17.5 14.5L19.5 12.5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M5 20H19"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="square"
    />
    <path
      d="M4.49994 12.4999L6.49994 14.4999"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M12 4L12.4243 3.57574L12 3.15147L11.5757 3.57574L12 4ZM11.4 12.5C11.4 12.8314 11.6686 13.1 12 13.1C12.3314 13.1 12.6 12.8314 12.6 12.5L11.4 12.5ZM15.4243 6.57574L12.4243 3.57574L11.5757 4.42426L14.5757 7.42426L15.4243 6.57574ZM11.5757 3.57574L8.57574 6.57574L9.42426 7.42426L12.4243 4.42426L11.5757 3.57574ZM11.4 4L11.4 12.5L12.6 12.5L12.6 4L11.4 4Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
