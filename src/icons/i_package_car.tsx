const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="16" cy="19" r="2" stroke="currentColor" stroke-width="2" />
    <circle cx="9" cy="19" r="2" stroke="currentColor" stroke-width="2" />
    <path
      d="M5 14H11V7M11 7V9H4V17C4 18.1046 4.89543 19 6 19H7M11 7H15L19.6247 10.6998C19.8619 10.8895 20 11.1768 20 11.4806V13M17 9H16V13H20M20 13V17C20 18.1046 19.1046 19 18 19V19M14 19H11"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export default SvgComponent;
