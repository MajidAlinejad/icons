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
      d="M3 6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V15H3V6Z"
      fill="#2A4157"
      fillOpacity="0.24"
    />
    <path
      d="M1 17C1 16.4477 1.44772 16 2 16H22C22.5523 16 23 16.4477 23 17C23 18.1046 22.1046 19 21 19H3C1.89543 19 1 18.1046 1 17Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
