const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="7" stroke="currentColor" />
    <circle cx="12" cy="12" r="2" fill="currentColor" stroke="currentColor" />
    <path
      d="M7.05026 7.05026L4.00006 4.00031M16.9498 7.05026L20.0001 4.00031M20.0001 20.0003L16.9498 16.9498M4.00006 20.0003L7.05026 16.9498"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
