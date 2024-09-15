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
      d="M5.96472 3.1363C5.2865 3.31803 4.66807 3.67508 4.17157 4.17157C3.67508 4.66807 3.31803 5.2865 3.1363 5.96472"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M18.0353 3.1363C18.7135 3.31803 19.3319 3.67508 19.8284 4.17157C20.3249 4.66807 20.682 5.2865 20.8637 5.96472"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V11.75C11 12.4404 11.5596 13 12.25 13H15C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11H13V8Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
