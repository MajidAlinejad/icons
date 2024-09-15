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
      d="M10 2L10 14L6.43484 14C6.26397 14 6.17179 14.2004 6.28299 14.3302L12 21L17.717 14.3302C17.8282 14.2004 17.736 14 17.5652 14L14 14L14 2"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);
export default SvgComponent;
