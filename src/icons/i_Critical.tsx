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
      d="M21 16C21 13.6131 20.0518 11.3239 18.364 9.63604C16.6761 7.94821 14.3869 7 12 7C9.61305 7 7.32387 7.94821 5.63604 9.63604C3.94821 11.3239 3 13.6131 3 16L8.00506 16C8.00506 14.9405 8.42595 13.9243 9.17515 13.1751C9.92435 12.426 10.9405 12.0051 12 12.0051C13.0595 12.0051 14.0757 12.426 14.8249 13.1751C15.574 13.9243 15.9949 14.9405 15.9949 16H21Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M12 7L12 12" stroke="currentColor" strokeWidth="2" />
    <path
      d="M18.364 9.63574L15.364 12.6357"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M5.63602 9.63574L9.00014 12.9999"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);
export default SvgComponent;
