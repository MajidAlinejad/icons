const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9 9.5L7 12M7 12L9 14.5M7 12H12.5" stroke="currentColor" />
    <path
      d="M3.5 18.5V5.5C3.5 4.39543 4.39543 3.5 5.5 3.5H18.5C19.6046 3.5 20.5 4.39543 20.5 5.5V18.5C20.5 19.6046 19.6046 20.5 18.5 20.5H5.5C4.39543 20.5 3.5 19.6046 3.5 18.5Z"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path d="M15.5 3.5V20.5" stroke="currentColor" strokeLinecap="round" />
  </svg>
);
export default SvgComponent;
