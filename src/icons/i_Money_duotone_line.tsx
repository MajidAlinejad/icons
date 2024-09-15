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
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.58579 6.58579C3 7.17157 3 8.11438 3 10V14C3 15.8856 3 16.8284 3.58579 17.4142C4.17157 18 5.11438 18 7 18H17C18.8856 18 19.8284 18 20.4142 17.4142C21 16.8284 21 15.8856 21 14V10C21 8.11438 21 7.17157 20.4142 6.58579C19.8284 6 18.8856 6 17 6H7C5.11438 6 4.17157 6 3.58579 6.58579ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <rect
      x="3"
      y="6"
      width="18"
      height="12"
      rx="2"
      stroke="currentColor"
      stroke-width="1.2"
    />
    <path
      d="M6 9H8"
      stroke="currentColor"
      stroke-width="1.2"
      stroke-linecap="round"
    />
    <path
      d="M16 15H18"
      stroke="currentColor"
      stroke-width="1.2"
      stroke-linecap="round"
    />
    <circle cx="12" cy="12" r="2.4" stroke="currentColor" stroke-width="1.2" />
  </svg>
);
export default SvgComponent;
