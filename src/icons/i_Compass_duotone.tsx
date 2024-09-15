const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="9" fill="#7E869E" fillOpacity="0.25" />
    <path
      d="M9.83107 7.84286C10.6807 8.30117 12.928 9.60727 13.7321 11C14.5361 12.3927 14.5436 14.9919 14.5157 15.9569C14.5106 16.1352 14.3259 16.2418 14.1689 16.1571C13.3193 15.6988 11.072 14.3927 10.268 13C9.46387 11.6073 9.45637 9.00806 9.48429 8.04308C9.48945 7.86476 9.67406 7.75817 9.83107 7.84286Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
