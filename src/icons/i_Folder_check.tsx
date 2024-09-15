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
      d="M5 12V9C5 7.11438 5 6.17157 5.58579 5.58579C6.17157 5 7.11438 5 9 5H9.34315C10.1606 5 10.5694 5 10.9369 5.15224C11.3045 5.30448 11.5935 5.59351 12.1716 6.17157L12.8284 6.82843C13.4065 7.40649 13.6955 7.69552 14.0631 7.84776C14.4306 8 14.8394 8 15.6569 8H17C18.8856 8 19.8284 8 20.4142 8.58579C21 9.17157 21 10.1144 21 12V15C21 16.8856 21 17.8284 20.4142 18.4142C19.8284 19 18.8856 19 17 19H12"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M4 16.5L6.5 19L11.5 14" stroke="currentColor" strokeWidth="2" />
  </svg>
);
export default SvgComponent;
