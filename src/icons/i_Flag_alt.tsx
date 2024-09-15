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
      d="M6 15V5.5C6 5.2643 6 5.14645 6.07322 5.07322C6.14645 5 6.2643 5 6.5 5H16.7929C17.3066 5 17.5635 5 17.6274 5.15433C17.6913 5.30866 17.5097 5.49029 17.1464 5.85355L13.2828 9.71716C13.1495 9.85049 13.0828 9.91716 13.0828 10C13.0828 10.0828 13.1495 10.1495 13.2828 10.2828L17.1464 14.1464C17.5097 14.5097 17.6913 14.6913 17.6274 14.8457C17.5635 15 17.3066 15 16.7929 15H6ZM6 15V19"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
