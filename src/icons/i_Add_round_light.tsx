const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 6L12 18" stroke="currentColor" strokeLinecap="round" />
    <path d="M18 12L6 12" stroke="currentColor" strokeLinecap="round" />
  </svg>
);
export default SvgComponent;
