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
      x="6"
      y="5"
      width="12"
      height="15"
      rx="2"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <path d="M9.5 9.5L14.5 9.5" stroke="currentColor" strokeLinecap="round" />
    <path d="M9.5 12.5L14.5 12.5" stroke="currentColor" strokeLinecap="round" />
    <path d="M9.5 15.5L14.5 15.5" stroke="currentColor" strokeLinecap="round" />
    <path
      d="M8 4.86957C8 4.38932 8.38932 4 8.86957 4H15.1304C15.6107 4 16 4.38932 16 4.86957C16 4.9416 15.9416 5 15.8696 5H15.5C15.2239 5 15 5.22386 15 5.5V5.85C15 5.93284 14.9328 6 14.85 6H9.15C9.06716 6 9 5.93284 9 5.85V5.5C9 5.22386 8.77614 5 8.5 5H8.13043C8.0584 5 8 4.9416 8 4.86957Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
