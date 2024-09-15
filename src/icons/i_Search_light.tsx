const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="11" cy="11" r="6" stroke="currentColor" />
    <path d="M20 20L17 17" stroke="currentColor" strokeLinecap="round" />
  </svg>
);
export default SvgComponent;
