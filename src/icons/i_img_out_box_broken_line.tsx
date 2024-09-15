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
      d="M21.5 2.5V2H22V2.5H21.5ZM16.8536 7.85355C16.6583 8.04882 16.3417 8.04882 16.1464 7.85355C15.9512 7.65829 15.9512 7.34171 16.1464 7.14645L16.8536 7.85355ZM21 7V2.5H22V7H21ZM21.5 3H17V2H21.5V3ZM21.8536 2.85355L16.8536 7.85355L16.1464 7.14645L21.1464 2.14645L21.8536 2.85355Z"
      fill="currentColor"
    />
    <path
      d="M4 13L5.8055 11.1945C6.68783 10.3122 8.1538 10.4443 8.86408 11.4703L10.7664 14.218C11.4311 15.1781 12.7735 15.3669 13.6773 14.6275L16.0991 12.646C16.8944 11.9954 18.0533 12.0532 18.7798 12.7798L20 14"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M11.5 2.5H6.5C4.29086 2.5 2.5 4.29086 2.5 6.5V11.5M21.5 12.5V17.5C21.5 19.7091 19.7091 21.5 17.5 21.5H6.5C4.29086 21.5 2.5 19.7091 2.5 17.5V15.5"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
