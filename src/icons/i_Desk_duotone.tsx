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
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8 5.30872C8 5.1649 8 5.09299 7.95455 5.04881C7.9091 5.00463 7.83786 5.00666 7.6954 5.01071C6.64243 5.04065 6.01726 5.15431 5.58579 5.58579C5 6.17157 5 7.11438 5 9V16C5 17.8856 5 18.8284 5.58579 19.4142C6.17157 20 7.11438 20 9 20H15C16.8856 20 17.8284 20 18.4142 19.4142C19 18.8284 19 17.8856 19 16V9C19 7.11438 19 6.17157 18.4142 5.58579C17.9827 5.15431 17.3576 5.04065 16.3046 5.01071C16.1621 5.00666 16.0909 5.00463 16.0455 5.04881C16 5.09299 16 5.1649 16 5.30872V6.5C16 7.32843 15.3284 8 14.5 8C13.6716 8 13 7.32843 13 6.5V5.3C13 5.15858 13 5.08787 12.9561 5.04393C12.9121 5 12.8414 5 12.7 5H11.3C11.1586 5 11.0879 5 11.0439 5.04393C11 5.08787 11 5.15858 11 5.3V6.5C11 7.32843 10.3284 8 9.5 8C8.67157 8 8 7.32843 8 6.5V5.30872Z"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <path d="M9.5 3.5V6.5" stroke="currentColor" strokeLinecap="round" />
    <path d="M14.5 3.5V6.5" stroke="currentColor" strokeLinecap="round" />
    <path d="M9.5 10.5L14.5 10.5" stroke="currentColor" strokeLinecap="round" />
    <path d="M9.5 13.5L14.5 13.5" stroke="currentColor" strokeLinecap="round" />
    <path d="M9.5 16.5L14.5 16.5" stroke="currentColor" strokeLinecap="round" />
  </svg>
);
export default SvgComponent;
