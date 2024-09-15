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
      d="M3.84299 8.12534L11.1877 4.86101C11.7049 4.63118 12.2951 4.63118 12.8123 4.86101L20.157 8.12534C20.4817 8.26962 20.4817 8.73038 20.157 8.87466L12.8123 12.139C12.2951 12.3688 11.7049 12.3688 11.1877 12.139L3.84299 8.87466C3.51835 8.73038 3.51835 8.26962 3.84299 8.12534Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.5 8.5V12.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.5 10.5V15.5C6.5 15.5 7 17.5 12 17.5C17 17.5 17.5 15.5 17.5 15.5V10.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgComponent;
