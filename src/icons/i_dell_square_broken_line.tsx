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
      d="M8.5 3.5H5.5C4.39543 3.5 3.5 4.39543 3.5 5.5V18.5C3.5 19.6046 4.39543 20.5 5.5 20.5H18.5C19.6046 20.5 20.5 19.6046 20.5 18.5V5.5C20.5 4.39543 19.6046 3.5 18.5 3.5H11.5"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M9.00012 14.9996L15.0001 8.99963"
      stroke="currentColor"
      stroke-width="1.2"
    />
    <path d="M15 15L9 9" stroke="currentColor" stroke-width="1.2" />
  </svg>
);
export default SvgComponent;
