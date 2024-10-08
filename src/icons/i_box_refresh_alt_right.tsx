const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 12L16 16L12 20" stroke="currentColor" strokeWidth="2" />
    <path
      d="M13 8L17 8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M16 16H8C5.79086 16 4 14.2091 4 12V12C4 9.79086 5.79086 8 8 8H9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
