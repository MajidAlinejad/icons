const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.5 3.5H19.5V17.3596C19.5 18.8228 17.9802 19.7908 16.6542 19.172L12.8458 17.3947C12.3097 17.1445 11.6903 17.1445 11.1542 17.3947L7.34577 19.172C6.01981 19.7908 4.5 18.8228 4.5 17.3596V3.5Z"
      stroke="#2A4157"
      stroke-opacity="0.24"
    />
    <rect x="2" y="3" width="20" height="1" rx="0.5" fill="currentColor" />
  </svg>
);
export default SvgComponent;
