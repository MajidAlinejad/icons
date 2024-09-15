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
      d="M4 5V4.5H3.5V5H4ZM12.1464 13.8536C12.3417 14.0488 12.6583 14.0488 12.8536 13.8536C13.0488 13.6583 13.0488 13.3417 12.8536 13.1464L12.1464 13.8536ZM4.5 11V5H3.5V11H4.5ZM4 5.5H10V4.5H4V5.5ZM3.64645 5.35355L12.1464 13.8536L12.8536 13.1464L4.35355 4.64645L3.64645 5.35355Z"
      fill="currentColor"
    />
    <path
      d="M21 13H16C14.1144 13 13.1716 13 12.5858 13.5858C12 14.1716 12 15.1144 12 17V19"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
