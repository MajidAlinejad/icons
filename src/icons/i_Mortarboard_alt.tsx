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
      d="M6 13L3 11L12 6L21 11L18 13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 14C13 14.5523 13.4477 15 14 15C14.5523 15 15 14.5523 15 14H13ZM13 7V14H15V7H13Z"
      fill="currentColor"
    />
    <path
      d="M6 13V17L12 19.5L18 17V13C18 13 17 11 12 11C7 11 6 13 6 13Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgComponent;
