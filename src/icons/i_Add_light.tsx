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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM11.5 17.5V17V12.5H7H6.5V11.5H7H11.5V7V6.5H12.5V7V11.5H17H17.5V12.5H17H12.5V17V17.5H11.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
