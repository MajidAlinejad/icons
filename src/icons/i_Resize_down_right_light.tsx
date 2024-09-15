const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10 20L20 20L20 10" stroke="currentColor" />
    <path d="M12 17L17 17L17 12" stroke="currentColor" />
  </svg>
);
export default SvgComponent;
