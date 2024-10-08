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
      d="M11.5 6.5V15C11.5 15.8284 12.1716 16.5 13 16.5V16.5C13.8284 16.5 14.5 15.8284 14.5 15V6.5C14.5 4.84315 13.1569 3.5 11.5 3.5V3.5C9.84315 3.5 8.5 4.84315 8.5 6.5V17C8.5 19.4853 10.5147 21.5 13 21.5V21.5C15.4853 21.5 17.5 19.4853 17.5 17V9.5"
      stroke="black"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
