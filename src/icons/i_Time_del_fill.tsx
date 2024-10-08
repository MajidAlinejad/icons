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
      d="M19 19L5 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.28281 6.40413C4.87059 7.84677 4 9.82172 4 12C4 16.4183 7.58172 20 12 20C14.1783 20 16.1532 19.1294 17.5959 17.7172L6.28281 6.40413ZM19.3304 15.209C19.761 14.2267 20 13.1413 20 12C20 7.58172 16.4183 4 12 4C10.8587 4 9.77328 4.23898 8.79095 4.66963L19.3304 15.209Z"
      fill="currentColor"
    />
    <path
      d="M18.0353 3.1363C18.7135 3.31803 19.3319 3.67508 19.8284 4.17157C20.3249 4.66807 20.682 5.2865 20.8637 5.96472"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
