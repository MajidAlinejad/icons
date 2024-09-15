const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="18"
      y="15"
      width="4"
      height="4"
      rx="2"
      transform="rotate(90 18 15)"
      stroke="currentColor"
    />
    <rect
      x="6"
      y="8"
      width="4"
      height="4"
      rx="2"
      transform="rotate(-90 6 8)"
      stroke="currentColor"
    />
    <path
      d="M8 8V13C8 14.8856 8 15.8284 8.58579 16.4142C9.17157 17 10.1144 17 12 17H14"
      stroke="currentColor"
    />
  </svg>
);
export default SvgComponent;
