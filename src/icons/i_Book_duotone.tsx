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
      x="4"
      y="3"
      width="16"
      height="18"
      rx="2"
      fill="#7E869E"
      fillOpacity="0.25"
    />
    <path d="M8.5 6.5L15.5 6.5" stroke="currentColor" strokeLinecap="round" />
    <path d="M8.5 9.5L12.5 9.5" stroke="currentColor" strokeLinecap="round" />
    <path d="M8.5 12.5L14.5 12.5" stroke="currentColor" strokeLinecap="round" />
    <path
      d="M4 19C4 17.8954 4.89543 17 6 17H17C17.9319 17 18.3978 17 18.7654 16.8478C19.2554 16.6448 19.6448 16.2554 19.8478 15.7654C20 15.3978 20 14.9319 20 14V17C20 18.8856 20 19.8284 19.4142 20.4142C18.8284 21 17.8856 21 16 21H6C4.89543 21 4 20.1046 4 19Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
