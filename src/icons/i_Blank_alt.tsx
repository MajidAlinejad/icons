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
      d="M12.1716 21H9C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17V7C5 5.11438 5 4.17157 5.58579 3.58579C6.17157 3 7.11438 3 9 3H15C16.8856 3 17.8284 3 18.4142 3.58579C19 4.17157 19 5.11438 19 7V14.1716C19 14.5803 19 14.7847 18.9239 14.9685C18.8478 15.1522 18.7032 15.2968 18.4142 15.5858L13.5858 20.4142C13.2968 20.7032 13.1522 20.8478 12.9685 20.9239C12.7847 21 12.5803 21 12.1716 21Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M12 21V16.3333C12 15.2334 12 14.6834 12.3417 14.3417C12.6834 14 13.2334 14 14.3333 14H19"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);
export default SvgComponent;
