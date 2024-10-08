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
      x="4.5"
      y="2.5"
      width="15"
      height="19"
      rx="2.5"
      stroke="currentColor"
    />
    <path d="M15 18H9" stroke="currentColor" />
  </svg>
);
export default SvgComponent;
