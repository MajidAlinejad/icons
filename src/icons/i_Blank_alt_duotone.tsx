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
      d="M5 19C5 20.1046 5.89543 21 7 21H11.75C11.8881 21 12 20.8881 12 20.75V16C12 14.8954 12.8954 14 14 14H18.75C18.8881 14 19 13.8881 19 13.75V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19Z"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <path
      d="M13 16V20.3964C13 20.6192 13.2693 20.7307 13.4268 20.5732L18.5732 15.4268C18.7307 15.2693 18.6192 15 18.3964 15H14C13.4477 15 13 15.4477 13 16Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
