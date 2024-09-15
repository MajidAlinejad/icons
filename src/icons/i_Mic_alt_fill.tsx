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
      d="M12 22V19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.08296 8H9C9.55228 8 10 8.44772 10 9C10 9.55228 9.55228 10 9 10H6V12H9C9.55228 12 10 12.4477 10 13C10 13.5523 9.55228 14 9 14H6.08296C6.55904 16.8377 9.027 19 12 19C14.973 19 17.441 16.8377 17.917 14H16C15.4477 14 15 13.5523 15 13C15 12.4477 15.4477 12 16 12H18V10H16C15.4477 10 15 9.55228 15 9C15 8.44772 15.4477 8 16 8H17.917C17.441 5.16229 14.973 3 12 3C9.027 3 6.55904 5.16229 6.08296 8Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
