const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      fill="#7E869E"
      fillOpacity="0.25"
    />
    <path
      d="M17 9L13.9558 13.5662C13.5299 14.2051 12.5728 14.1455 12.2294 13.4587L11.7706 12.5413C11.4272 11.8545 10.4701 11.7949 10.0442 12.4338L7 17"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgComponent;
