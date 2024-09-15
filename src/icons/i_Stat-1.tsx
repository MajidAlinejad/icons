const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="18"
      y="7"
      width="4"
      height="13"
      rx="1"
      stroke="currentColor"
      stroke-linejoin="round"
    />
    <rect
      x="10"
      y="13"
      width="4"
      height="7"
      rx="1"
      stroke="currentColor"
      stroke-linejoin="round"
    />
    <rect
      x="2"
      y="9"
      width="4"
      height="11"
      rx="1"
      stroke="currentColor"
      stroke-linejoin="round"
    />
  </svg>
);
export default SvgComponent;
