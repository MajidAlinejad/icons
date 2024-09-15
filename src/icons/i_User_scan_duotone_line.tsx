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
      d="M17.5 3.5H17.7C19.4913 3.5 20.387 3.5 20.9435 4.0565C21.5 4.61299 21.5 5.50866 21.5 7.3V7.5M17.5 20.5H17.7C19.4913 20.5 20.387 20.5 20.9435 19.9435C21.5 19.387 21.5 18.4913 21.5 16.7V16.5M6.5 3.5H6.3C4.50866 3.5 3.61299 3.5 3.0565 4.0565C2.5 4.61299 2.5 5.50866 2.5 7.3V7.5M6.5 20.5H6.3C4.50866 20.5 3.61299 20.5 3.0565 19.9435C2.5 19.387 2.5 18.4913 2.5 16.7V16.5"
      stroke="#7E869E"
      stroke-opacity="0.25"
      strokeLinecap="round"
    />
    <path
      d="M6.66623 17.3147C6.86267 16.3045 7.49257 15.3597 8.47907 14.6671C9.467 13.9736 10.7355 13.5893 12.0549 13.6002C13.3743 13.6112 14.6325 14.0165 15.6024 14.7255C16.5708 15.4333 17.1772 16.3871 17.3492 17.3994"
      stroke="currentColor"
      stroke-width="1.2"
      strokeLinecap="round"
    />
    <circle
      cx="12"
      cy="9"
      r="2.4"
      stroke="currentColor"
      stroke-width="1.2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
