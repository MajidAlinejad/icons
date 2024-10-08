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
      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12 17.5C11.7239 17.5 11.5 17.2761 11.5 17V12.5H7C6.72386 12.5 6.5 12.2761 6.5 12C6.5 11.7239 6.72386 11.5 7 11.5H11.5V7C11.5 6.72386 11.7239 6.5 12 6.5C12.2761 6.5 12.5 6.72386 12.5 7V11.5H17C17.2761 11.5 17.5 11.7239 17.5 12C17.5 12.2761 17.2761 12.5 17 12.5H12.5V17C12.5 17.2761 12.2761 17.5 12 17.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
