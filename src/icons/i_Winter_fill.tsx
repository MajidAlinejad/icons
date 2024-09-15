const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="13" r="4" fill="currentColor" />
    <path
      d="M12 9V7M12 4V7M12 7L9 5M12 7L15 5"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M15.5 12.5L17.5 12.5M20.5 12.5L17.5 12.5M17.5 12.5L19.5 9.5M17.5 12.5L19.5 15.5"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M12 16V18M12 21V18M12 18L9 20M12 18L15 20"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M8.5 12.5L6.5 12.5M3.5 12.5L6.5 12.5M6.5 12.5L4.5 9.5M6.5 12.5L4.5 15.5"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
