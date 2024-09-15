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
      d="M12 17V20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.25535 15.3861L7.0447 16L7.0447 16L6.25535 15.3861ZM10.4445 10V9C10.1359 9 9.84461 9.14247 9.65515 9.38606L10.4445 10ZM17.7448 15.3861L16.9554 16L16.9554 16L17.7448 15.3861ZM13.5556 10L14.345 9.38606C14.1555 9.14247 13.8642 9 13.5556 9V10ZM7.0447 16L11.2339 10.6139L9.65515 9.38606L5.46599 14.7721L7.0447 16ZM7.0447 16L7.0447 16L5.46599 14.7721C4.44421 16.0858 5.38041 18 7.0447 18V16ZM16.9554 16H7.0447V18H16.9554V16ZM16.9554 16L16.9554 16V18C18.6197 18 19.5559 16.0858 18.5341 14.7721L16.9554 16ZM12.7663 10.6139L16.9554 16L18.5341 14.7721L14.345 9.38606L12.7663 10.6139ZM13.5556 9H10.4445V11H13.5556V9Z"
      fill="currentColor"
    />
    <path
      d="M7.70711 8.29289L12 4L16.2929 8.29289C16.9229 8.92286 16.4767 10 15.5858 10H8.41421C7.52331 10 7.07714 8.92286 7.70711 8.29289Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgComponent;
