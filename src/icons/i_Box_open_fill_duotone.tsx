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
      d="M5 12H19V16C19 17.8856 19 18.8284 18.4142 19.4142C17.8284 20 16.8856 20 15 20H9C7.11438 20 6.17157 20 5.58579 19.4142C5 18.8284 5 17.8856 5 16V12Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.81525 7.81528L4.99995 9.99998V11H6.19995H17.8H19V9.99998L21.1847 7.81528C21.615 7.38497 21.5644 6.6733 21.0775 6.30817L18.566 4.42449C18.2268 4.1701 17.764 4.15725 17.4113 4.39244L15 5.99998H8.99995L6.58864 4.39244C6.23587 4.15725 5.77313 4.1701 5.43394 4.42449L2.92236 6.30817C2.43552 6.6733 2.38495 7.38497 2.81525 7.81528ZM8.59995 7.19998H15.4L17.35 9.79998H6.64995L8.59995 7.19998Z"
      fill="#7E869E"
      fillOpacity="0.25"
    />
  </svg>
);
export default SvgComponent;
