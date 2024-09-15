const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" />
    <path
      d="M12 8V6M12 3V6M12 6L9 4M12 6L15 4"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M16 12L18 12M21 12L18 12M18 12L20 9M18 12L20 15"
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
      d="M8 12L6 12M3 12L6 12M6 12L4 9M6 12L4 15"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
