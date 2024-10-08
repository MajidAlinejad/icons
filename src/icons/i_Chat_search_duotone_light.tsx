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
      d="M14.5 18.5H6.5C5.94772 18.5 5.5 18.0523 5.5 17.5V9.5C5.5 7.29086 7.29086 5.5 9.5 5.5H14.5C16.7091 5.5 18.5 7.29086 18.5 9.5V11.5"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M7.5 10.5L14.5 10.5"
      stroke="#7E869E"
      strokeOpacity="0.25"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 13.5L12.5 13.5"
      stroke="#7E869E"
      strokeOpacity="0.25"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="16.5" cy="15.5" r="2" stroke="currentColor" />
    <path d="M19 18L20.5 19.5" stroke="currentColor" strokeLinecap="round" />
  </svg>
);
export default SvgComponent;
