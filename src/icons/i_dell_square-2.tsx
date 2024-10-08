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
      d="M3 7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V7Z"
      fill="#7E869E"
      fillOpacity="0.25"
    />
    <path
      d="M9.00012 14.9996L15.0001 8.99963"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path d="M15 15L9 9" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);
export default SvgComponent;
