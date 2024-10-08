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
      d="M6.5 10.5L5.07373 9.88874C4.09205 9.46802 3 10.1881 3 11.2562V11.2562C3 11.7244 3.22047 12.1654 3.59508 12.4463L7 15M17.5 10.5L18.9263 9.88874C19.908 9.46802 21 10.1881 21 11.2562V11.2562C21 11.7244 20.7795 12.1654 20.4049 12.4463L17 15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 7H8C6.89543 7 6 7.89543 6 9V15C6 16.1046 6.89543 17 8 17H16C17.1046 17 18 16.1046 18 15V9C18 7.89543 17.1046 7 16 7ZM13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10V11H10C9.44772 11 9 11.4477 9 12C9 12.5523 9.44772 13 10 13H11V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V13H14C14.5523 13 15 12.5523 15 12C15 11.4477 14.5523 11 14 11H13V10Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
