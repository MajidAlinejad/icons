const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="3" y="6" width="18" height="15" rx="2" stroke="currentColor" />
    <path d="M3 11L21 11" stroke="currentColor" strokeLinecap="round" />
    <path d="M9 16H15" stroke="currentColor" strokeLinecap="round" />
    <path d="M8 3L8 7" stroke="currentColor" strokeLinecap="round" />
    <path d="M16 3L16 7" stroke="currentColor" strokeLinecap="round" />
  </svg>
);
export default SvgComponent;
