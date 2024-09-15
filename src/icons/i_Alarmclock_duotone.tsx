const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="13" r="8" fill="#7E869E" fill-opacity="0.25" />
    <path d="M5.5 4.5L3.5 6.5" stroke="currentColor" stroke-linecap="round" />
    <path d="M18.5 4.5L20.5 6.5" stroke="currentColor" stroke-linecap="round" />
    <path
      d="M12 8V12.9243C12 12.9737 12.0146 13.0219 12.042 13.063L14 16"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
