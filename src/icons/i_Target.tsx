const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="7" stroke="currentColor" stroke-width="2" />
    <circle
      cx="12"
      cy="12"
      r="2"
      fill="currentColor"
      stroke="currentColor"
      stroke-width="2"
    />
    <path
      d="M7.0502 7.05026L4 4.00031M16.9497 7.05026L20 4.00031M20 20.0003L16.9497 16.9498M4 20.0003L7.0502 16.9498"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
