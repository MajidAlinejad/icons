const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M9.40192 13.5C9.66523 13.9561 10.0439 14.3348 10.5 14.5981C10.9561 14.8614 11.4734 15 12 15C12.5266 15 13.0439 14.8614 13.5 14.5981C13.9561 14.3348 14.3348 13.9561 14.5981 13.5"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <rect
      x="6.875"
      y="7.875"
      width="3.25"
      height="2.25"
      rx="1.125"
      fill="currentColor"
      stroke="currentColor"
      stroke-width="0.25"
      stroke-linecap="round"
    />
    <rect
      x="13.875"
      y="7.875"
      width="3.25"
      height="2.25"
      rx="1.125"
      fill="currentColor"
      stroke="currentColor"
      stroke-width="0.25"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
