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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 7.5C12.5 7.22386 12.2761 7 12 7C11.7239 7 11.5 7.22386 11.5 7.5V11H4.5C4.22386 11 4 11.2239 4 11.5C4 11.7761 4.22386 12 4.5 12H11.5V19.5C11.5 19.7761 11.7239 20 12 20C12.2761 20 12.5 19.7761 12.5 19.5V12H18.5C18.7761 12 19 11.7761 19 11.5C19 11.2239 18.7761 11 18.5 11H12.5V7.5Z"
      fill="#2A4157"
      fillOpacity="0.24"
    />
    <path
      d="M3.5 8.5C3.5 7.94772 3.94772 7.5 4.5 7.5H19.5C20.0523 7.5 20.5 7.94772 20.5 8.5V10.5C20.5 11.0523 20.0523 11.5 19.5 11.5H18.5C17.9477 11.5 17.5 11.9477 17.5 12.5V18.5C17.5 19.0523 17.0523 19.5 16.5 19.5H7.5C6.94771 19.5 6.5 19.0523 6.5 18.5V12.5C6.5 11.9477 6.05228 11.5 5.5 11.5H4.5C3.94772 11.5 3.5 11.0523 3.5 10.5V8.5Z"
      stroke="currentColor"
    />
    <path
      d="M12 7.5L12.8905 6.43136C13.9426 5.16883 15.3259 4.22468 16.8851 3.70498V3.70498C17.9255 3.35816 19 4.1326 19 5.22935V5.61512C19 6.65611 18.1561 7.5 17.1151 7.5H15.5"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M12 7.5L11.1095 6.43136C10.0574 5.16883 8.67405 4.22468 7.11495 3.70498V3.70498C6.07448 3.35816 5 4.1326 5 5.22935V5.61512C5 6.65611 5.84389 7.5 6.88488 7.5H8.5"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
