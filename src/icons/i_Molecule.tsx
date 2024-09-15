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
      d="M10 14L7 17"
      stroke="currentColor"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <path
      d="M10.5 10.5L6 6"
      stroke="currentColor"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <circle cx="18" cy="19" r="1" stroke="currentColor" stroke-width="2" />
    <path
      d="M14 14L18 19"
      stroke="currentColor"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <circle cx="19" cy="5" r="2" stroke="currentColor" stroke-width="2" />
    <path
      d="M17 7L14 10"
      stroke="currentColor"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <circle cx="5.5" cy="5.5" r="2.5" fill="currentColor" />
    <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" stroke-width="2" />
  </svg>
);
export default SvgComponent;
