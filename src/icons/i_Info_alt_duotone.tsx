const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="9" fill="#7E869E" fill-opacity="0.25" />
    <path d="M12 17.5V10.5H10.5M12 17.5H14M12 17.5H10" stroke="currentColor" />
  </svg>
);
export default SvgComponent;
