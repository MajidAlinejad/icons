const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="14" r="8" stroke="currentColor" stroke-width="1.2" />
    <path
      d="M12 14L12 11"
      stroke="currentColor"
      stroke-width="1.2"
      stroke-linecap="round"
    />
    <path
      d="M17.5 7.5L19 6"
      stroke="#7E869E"
      stroke-opacity="0.25"
      stroke-width="1.2"
      stroke-linecap="round"
    />
    <path
      d="M10.0681 3.37059C10.1821 3.26427 10.4332 3.17033 10.7825 3.10332C11.1318 3.03632 11.5597 3 12 3C12.4403 3 12.8682 3.03632 13.2175 3.10332C13.5668 3.17033 13.8179 3.26427 13.9319 3.37059"
      stroke="#7E869E"
      stroke-opacity="0.25"
      stroke-width="1.2"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
