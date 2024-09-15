const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="2.5" stroke="currentColor" />
    <path d="M10 14L6.5 17.5" stroke="currentColor" stroke-linejoin="round" />
    <path d="M10.5 10.5L6 6" stroke="currentColor" stroke-linejoin="round" />
    <circle cx="17" cy="17" r="1.5" stroke="currentColor" />
    <circle cx="20" cy="12" r="1.5" stroke="currentColor" />
    <path d="M18.5 12H14.5" stroke="currentColor" stroke-linejoin="round" />
    <path d="M14 14L16 16" stroke="currentColor" stroke-linejoin="round" />
    <circle cx="19" cy="5" r="2.5" stroke="currentColor" />
    <path d="M17 7L14 10" stroke="currentColor" stroke-linejoin="round" />
    <circle cx="5" cy="5" r="1.5" stroke="currentColor" />
    <circle cx="5" cy="19" r="2.5" stroke="currentColor" />
  </svg>
);
export default SvgComponent;
