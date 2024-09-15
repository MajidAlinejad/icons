const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="17" cy="8" r="4" stroke="currentColor" />
    <circle cx="12" cy="17" r="3" stroke="currentColor" />
    <circle cx="6.5" cy="9.5" r="2.5" stroke="currentColor" />
  </svg>
);
export default SvgComponent;
