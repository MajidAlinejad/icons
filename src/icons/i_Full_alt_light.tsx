const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="3"
      y="5"
      width="18"
      height="14"
      rx="1.5"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <path
      d="M6 8V7.5H5.5V8H6ZM9.64645 12.3536C9.84171 12.5488 10.1583 12.5488 10.3536 12.3536C10.5488 12.1583 10.5488 11.8417 10.3536 11.6464L9.64645 12.3536ZM6.5 12V8H5.5V12H6.5ZM6 8.5H10V7.5H6V8.5ZM5.64645 8.35355L9.64645 12.3536L10.3536 11.6464L6.35355 7.64645L5.64645 8.35355Z"
      fill="currentColor"
    />
    <path
      d="M18 16V16.5H18.5V16H18ZM14.3536 11.6464C14.1583 11.4512 13.8417 11.4512 13.6464 11.6464C13.4512 11.8417 13.4512 12.1583 13.6464 12.3536L14.3536 11.6464ZM17.5 12V16H18.5V12H17.5ZM18 15.5H14V16.5H18V15.5ZM18.3536 15.6464L14.3536 11.6464L13.6464 12.3536L17.6464 16.3536L18.3536 15.6464Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
