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
      d="M8.5 15.5V15H9V15.5H8.5ZM3.85355 20.8536C3.65829 21.0488 3.34171 21.0488 3.14645 20.8536C2.95118 20.6583 2.95118 20.3417 3.14645 20.1464L3.85355 20.8536ZM8 20V15.5H9V20H8ZM8.5 16H4V15H8.5V16ZM8.85355 15.8536L3.85355 20.8536L3.14645 20.1464L8.14645 15.1464L8.85355 15.8536Z"
      fill="currentColor"
    />
    <path
      d="M12 21.5H17.5C19.7091 21.5 21.5 19.7091 21.5 17.5V6.5C21.5 4.29086 19.7091 2.5 17.5 2.5H6.5C4.29086 2.5 2.5 4.29086 2.5 6.5V12"
      stroke="currentColor"
    />
    <path
      d="M8.5 8.5L11.7966 13.2616C12.4501 14.2055 13.7625 14.4067 14.6688 13.7018L16.1064 12.5838C16.9025 11.9646 18.0352 12.0351 18.7484 12.7483L21.5 15.4999"
      stroke="currentColor"
    />
    <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor" />
  </svg>
);
export default SvgComponent;
