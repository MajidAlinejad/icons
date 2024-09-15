const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 5H14M14 5H19M14 5V19M9 19H14M14 19H19" stroke="currentColor" />
    <path d="M11 9H4C2.89543 9 2 9.89543 2 11V15H11" stroke="currentColor" />
    <path
      d="M17 15H20C21.1046 15 22 14.1046 22 13V9H17"
      stroke="currentColor"
    />
  </svg>
);
export default SvgComponent;
