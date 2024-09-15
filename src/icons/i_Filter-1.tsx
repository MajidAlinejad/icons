const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M5 12L5 4" stroke="currentColor" strokeLinecap="round" />
    <path d="M19 20L19 17" stroke="currentColor" strokeLinecap="round" />
    <path d="M5 20L5 16" stroke="currentColor" strokeLinecap="round" />
    <path d="M19 13L19 4" stroke="currentColor" strokeLinecap="round" />
    <path d="M12 7L12 4" stroke="currentColor" strokeLinecap="round" />
    <path d="M12 20L12 11" stroke="currentColor" strokeLinecap="round" />
    <circle cx="5" cy="14" r="2" stroke="currentColor" strokeLinecap="round" />
    <circle cx="12" cy="9" r="2" stroke="currentColor" strokeLinecap="round" />
    <circle cx="19" cy="15" r="2" stroke="currentColor" strokeLinecap="round" />
  </svg>
);
export default SvgComponent;
