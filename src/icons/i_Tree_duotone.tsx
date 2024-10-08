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
      d="M12 13.5V19.5"
      stroke="#7E869E"
      strokeOpacity="0.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 10C10.6852 10 10.3888 10.1482 10.2 10.4L7.19998 14.4C6.70556 15.0592 7.17594 16 7.99998 16H16C16.824 16 17.2944 15.0592 16.8 14.4L13.8 10.4C13.6111 10.1482 13.3147 10 13 10H11Z"
      fill="currentColor"
    />
    <path
      d="M8.64018 7.03178L11.2318 3.92187C11.6316 3.44211 12.3684 3.44211 12.7682 3.92186L15.3598 7.03178C16.0111 7.81337 15.4554 9 14.438 9H9.56205C8.54464 9 7.98886 7.81337 8.64018 7.03178Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
