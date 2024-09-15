const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="9"
      y="15"
      width="6"
      height="6"
      rx="2"
      transform="rotate(90 9 15)"
      stroke="currentColor"
    />
    <path d="M18 3L21 7L18 11" stroke="currentColor" />
    <path
      d="M21 7H14C10.2288 7 8.34315 7 7.17157 8.17157C6 9.34315 6 11.2288 6 15V15"
      stroke="currentColor"
    />
  </svg>
);
export default SvgComponent;
