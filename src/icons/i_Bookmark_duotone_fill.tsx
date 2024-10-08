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
      d="M4 5C4 3.89543 4.89543 3 6 3H18C19.1046 3 20 3.89543 20 5V17.7639C20 19.2507 18.4354 20.2177 17.1056 19.5528L12.8944 17.4472C12.3314 17.1657 11.6686 17.1657 11.1056 17.4472L6.89443 19.5528C5.56462 20.2177 4 19.2507 4 17.7639V5Z"
      fill="#2A4157"
      fillOpacity="0.24"
    />
    <rect x="6" y="5" width="12" height="2" rx="1" fill="currentColor" />
  </svg>
);
export default SvgComponent;
