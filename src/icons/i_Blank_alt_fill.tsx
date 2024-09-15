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
      d="M7 2C5.34315 2 4 3.34315 4 5V19C4 20.6569 5.34315 22 7 22H11V17L11 16.9384C10.9999 16.2843 10.9999 15.6965 11.0638 15.2208C11.1337 14.7015 11.2958 14.1687 11.7322 13.7322C12.1687 13.2958 12.7015 13.1337 13.2208 13.0638C13.6966 12.9999 14.2843 12.9999 14.9384 13L15 13H20V5C20 3.34315 18.6569 2 17 2H7ZM19.7305 15H15C14.2646 15 13.8137 15.0021 13.4873 15.046C13.2005 15.0846 13.1526 15.1394 13.1469 15.1459L13.1464 15.1464L13.1459 15.1469C13.1394 15.1526 13.0846 15.2005 13.046 15.4873C13.0021 15.8137 13 16.2646 13 17V21.7305C13.324 21.5831 13.6222 21.3778 13.8787 21.1213L19.1213 15.8787C19.3778 15.6222 19.5831 15.324 19.7305 15Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
