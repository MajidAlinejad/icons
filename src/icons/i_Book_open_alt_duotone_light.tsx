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
      d="M21 19V6C21 6 20 4 16.5 4C13 4 12 7 12 7C12 7 11 4 7.5 4C4 4 3 6 3 6V19C3 19 4 17 7.5 17C11 17 12 19 12 19C12 19 13 17 16.5 17C20 17 21 19 21 19Z"
      fill="#7E869E"
      fillOpacity="0.25"
    />
    <path d="M12 6.5V18.5" stroke="currentColor" strokeLinecap="round" />
    <path d="M20.5 6.5V18.5" stroke="currentColor" strokeLinecap="round" />
    <path d="M3.5 6.5V18.5" stroke="currentColor" strokeLinecap="round" />
  </svg>
);
export default SvgComponent;
