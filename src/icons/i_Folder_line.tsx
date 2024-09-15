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
      d="M4 8C4 6.11438 4 5.17157 4.58579 4.58579C5.17157 4 6.11438 4 8 4H8.34315C9.16065 4 9.5694 4 9.93694 4.15224C10.3045 4.30448 10.5935 4.59351 11.1716 5.17157L11.8284 5.82843C12.4065 6.40649 12.6955 6.69552 13.0631 6.84776C13.4306 7 13.8394 7 14.6569 7H16C17.8856 7 18.8284 7 19.4142 7.58579C20 8.17157 20 9.11438 20 11V15C20 16.8856 20 17.8284 19.4142 18.4142C18.8284 19 17.8856 19 16 19H8C6.11438 19 5.17157 19 4.58579 18.4142C4 17.8284 4 16.8856 4 15V8Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M5 11H19"
      stroke="#CCD2E3"
      strokeWidth="2"
      stroke-miterlimit="1.41421"
    />
  </svg>
);
export default SvgComponent;
