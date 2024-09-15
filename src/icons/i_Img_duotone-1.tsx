const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx="18"
      cy="7"
      r="1"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.2422 18H5.18596C4.23905 18 3.66519 16.9546 4.17356 16.1557L8.98755 8.59091C9.4591 7.84991 10.5408 7.84991 11.0123 8.5909L13.5813 12.6279L15.0015 10.4977C15.4765 9.78521 16.5234 9.78521 16.9984 10.4977L20.7562 16.1344C21.2878 16.9318 20.7162 18 19.7577 18H14.8139H12.2422Z"
      fill="#7E869E"
      fill-opacity="0.25"
    />
  </svg>
);
export default SvgComponent;
