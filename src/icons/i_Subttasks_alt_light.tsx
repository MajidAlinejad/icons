const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="16"
      y="9"
      width="4"
      height="4"
      rx="2"
      transform="rotate(90 16 9)"
      stroke="currentColor"
    />
    <rect
      x="20"
      y="17"
      width="4"
      height="4"
      rx="2"
      transform="rotate(90 20 17)"
      stroke="currentColor"
    />
    <path
      d="M5 4V15C5 16.8856 5 17.8284 5.58579 18.4142C6.17157 19 7.11438 19 9 19H16"
      stroke="currentColor"
    />
    <path
      d="M5 7V7C5 8.88562 5 9.82843 5.58579 10.4142C6.17157 11 7.11438 11 9 11H12"
      stroke="currentColor"
    />
  </svg>
);
export default SvgComponent;
