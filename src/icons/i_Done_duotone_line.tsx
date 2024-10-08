const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="10" cy="14" r="7" fill="#7E869E" fillOpacity="0.25" />
    <path d="M6 13L10 16L17 7" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);
export default SvgComponent;
