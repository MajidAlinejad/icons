const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 18L18 12L12 6" stroke="currentColor" strokeWidth="2" />
    <path d="M6 18L12 12L6 6" stroke="currentColor" strokeWidth="2" />
  </svg>
);
export default SvgComponent;
