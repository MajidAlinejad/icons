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
      d="M9.5 8L16.5 5.5L13.5 10.5L12.5 15.5L11 17.5L5.5 16.5L6 14.5L9.5 8Z"
      fill="currentColor"
    />
    <path
      d="M6 21L5.81092 17.9747C5.37149 10.9438 10.9554 5 18 5V5L16.7827 5.97387C14.3918 7.88656 13 10.7824 13 13.8442V13.8442C13 15.9831 11.0278 17.5774 8.93642 17.1292L6 16.5"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);
export default SvgComponent;
