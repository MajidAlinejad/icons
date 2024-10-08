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
      d="M15 13H17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 9H17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 5H19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 4V14.5351C13.1956 15.2267 14 16.5194 14 18C14 20.2091 12.2091 22 10 22C7.79086 22 6 20.2091 6 18C6 16.5194 6.8044 15.2267 8 14.5351V4C8 2.89543 8.89543 2 10 2C11.1046 2 12 2.89543 12 4ZM10 20C11.1046 20 12 19.1046 12 18C12 16.8954 11.1046 16 10 16C8.89543 16 8 16.8954 8 18C8 19.1046 8.89543 20 10 20Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
