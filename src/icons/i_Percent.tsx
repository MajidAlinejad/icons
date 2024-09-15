const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20 4L4 20" stroke="currentColor" strokeWidth="2" />
    <circle cx="6.5" cy="7.5" r="3.5" stroke="currentColor" strokeWidth="2" />
    <circle cx="17.5" cy="16.5" r="3.5" stroke="currentColor" strokeWidth="2" />
  </svg>
);
export default SvgComponent;
