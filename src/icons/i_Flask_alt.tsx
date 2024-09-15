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
      d="M15 5V11.6972C15 11.8946 15.0584 12.0877 15.1679 12.2519L19.9635 19.4453C20.4066 20.1099 19.9302 21 19.1315 21H4.86852C4.06982 21 3.59343 20.1099 4.03647 19.4453L8.83205 12.2519C8.94156 12.0877 9 11.8946 9 11.6972V5"
      stroke="currentColor"
      stroke-width="2"
      strokeLinejoin="round"
    />
    <path
      d="M16.9 18.2L14.8 15.4C14.6111 15.1482 14.3148 15 14 15H10C9.68524 15 9.38885 15.1482 9.2 15.4L7.1 18.2C6.85279 18.5296 7.08798 19 7.5 19H16.5C16.912 19 17.1472 18.5296 16.9 18.2Z"
      fill="currentColor"
    />
    <path
      d="M7 5H17"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgComponent;
