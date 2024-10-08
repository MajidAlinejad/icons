const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="9" fill="#2A4157" fillOpacity="0.24" />
    <path
      d="M15.2111 11.1056L10.7367 8.86833C9.93878 8.46939 9 9.04958 9 9.94164V14.0584C9 14.9504 9.93877 15.5306 10.7367 15.1317L15.2111 12.8944C15.9482 12.5259 15.9482 11.4741 15.2111 11.1056Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
