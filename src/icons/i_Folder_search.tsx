const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 12V12C20 10.1144 20 9.17157 19.4142 8.58579C18.8284 8 17.8856 8 16 8H14.6569C13.8394 8 13.4306 8 13.0631 7.84776C12.6955 7.69552 12.4065 7.40649 11.8284 6.82843L11.1716 6.17157C10.5935 5.59351 10.3045 5.30448 9.93694 5.15224C9.5694 5 9.16065 5 8.34315 5H8C6.11438 5 5.17157 5 4.58579 5.58579C4 6.17157 4 7.11438 4 9V15C4 16.8856 4 17.8284 4.58579 18.4142C5.17157 19 6.11438 19 8 19H11"
      stroke="currentColor"
      stroke-width="2"
    />
    <circle
      cx="16.5"
      cy="16.5"
      r="2.5"
      stroke="currentColor"
      stroke-width="2"
    />
    <path
      d="M19.5 19.5L21 21"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
