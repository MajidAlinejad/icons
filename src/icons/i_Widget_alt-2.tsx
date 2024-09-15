const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="2" y="3" width="20" height="9" rx="2" stroke="currentColor" />
    <path
      d="M16 18V18C16 19.1046 15.1046 20 14 20H10C8.89543 20 8 19.1046 8 18V18"
      stroke="currentColor"
    />
    <path
      d="M19 14V14C19 15.1046 18.1046 16 17 16H7C5.89543 16 5 15.1046 5 14V14"
      stroke="currentColor"
    />
  </svg>
);
export default SvgComponent;
