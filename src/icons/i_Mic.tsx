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
      x="9"
      y="3"
      width="6"
      height="11"
      rx="3"
      stroke="currentColor"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <path
      d="M5 11C5 12.8565 5.7375 14.637 7.05025 15.9497C8.36301 17.2625 10.1435 18 12 18C13.8565 18 15.637 17.2625 16.9497 15.9497C18.2625 14.637 19 12.8565 19 11"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 21V19"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export default SvgComponent;
