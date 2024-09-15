const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11.5 8.5V4.5" stroke="currentColor" strokeLinecap="round" />
    <path d="M6.5 14.5V18.5" stroke="currentColor" strokeLinecap="round" />
    <path
      d="M16.5 16.4998L16.5 18.5"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path d="M11.5 18.5V12.5" stroke="currentColor" strokeLinecap="round" />
    <path d="M6.5 4.5V10.5" stroke="currentColor" strokeLinecap="round" />
    <path d="M16.5 4.5V12.5" stroke="currentColor" strokeLinecap="round" />
    <path d="M9.5 8.5L13.5 8.5" stroke="currentColor" strokeLinecap="round" />
    <path d="M4.5 14.5L8.5 14.5" stroke="currentColor" strokeLinecap="round" />
    <path d="M14.5 16.5H18.5" stroke="currentColor" strokeLinecap="round" />
  </svg>
);
export default SvgComponent;
