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
      d="M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10V14C21 15.8856 21 16.8284 20.4142 17.4142C19.8284 18 18.8856 18 17 18H7C5.11438 18 4.17157 18 3.58579 17.4142C3 16.8284 3 15.8856 3 14V10Z"
      fill="#7E869E"
      fillOpacity="0.25"
    />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <rect x="5" y="8" width="3" height="1" rx="0.5" fill="currentColor" />
    <rect x="16" y="15" width="3" height="1" rx="0.5" fill="currentColor" />
  </svg>
);
export default SvgComponent;
