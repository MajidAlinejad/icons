const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <ellipse
      cx="12"
      cy="6"
      rx="7"
      ry="3"
      stroke="currentColor"
      stroke-width="2"
    />
    <path
      d="M19 18C19 18.394 18.8189 18.7841 18.4672 19.1481C18.1154 19.512 17.5998 19.8427 16.9497 20.1213C16.2997 20.3999 15.5281 20.6209 14.6788 20.7716C13.8295 20.9224 12.9193 21 12 21C11.0807 21 10.1705 20.9224 9.32122 20.7716C8.47194 20.6209 7.70026 20.3999 7.05025 20.1213C6.40024 19.8427 5.88463 19.512 5.53284 19.1481C5.18106 18.7841 5 18.394 5 18"
      stroke="currentColor"
      stroke-width="2"
    />
    <path d="M19 6V18" stroke="currentColor" stroke-width="2" />
    <path d="M5 6V18" stroke="currentColor" stroke-width="2" />
  </svg>
);
export default SvgComponent;
