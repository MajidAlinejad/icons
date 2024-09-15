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
      d="M2 19C2 20.1046 2.89543 21 4 21H14.75C14.8881 21 15 20.8881 15 20.75V16C15 14.8954 15.8954 14 17 14H21.75C21.8881 14 22 13.8881 22 13.75V5C22 3.89543 21.1046 3 20 3H4C2.89543 3 2 3.89543 2 5V19Z"
      fill="#7E869E"
      fillOpacity="0.25"
    />
    <path
      d="M16 16V20.3964C16 20.6192 16.2693 20.7307 16.4268 20.5732L21.5732 15.4268C21.7307 15.2693 21.6192 15 21.3964 15H17C16.4477 15 16 15.4477 16 16Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
