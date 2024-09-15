const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="3" y="6" width="18" height="15" rx="2" stroke="currentColor" />
    <path
      d="M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10H3Z"
      fill="currentColor"
    />
    <path d="M7 3L7 6" stroke="currentColor" stroke-linecap="round" />
    <path d="M17 3L17 6" stroke="currentColor" stroke-linecap="round" />
  </svg>
);
export default SvgComponent;
