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
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
      fill="#7E869E"
      fillOpacity="0.25"
    />
    <path
      d="M18.4 12C18.4 15.5346 15.5346 18.4 12 18.4V19.6C16.1974 19.6 19.6 16.1974 19.6 12H18.4ZM12 5.6C15.5346 5.6 18.4 8.46538 18.4 12H19.6C19.6 7.80264 16.1974 4.4 12 4.4V5.6ZM5.6 12C5.6 8.46538 8.46538 5.6 12 5.6V4.4C7.80264 4.4 4.4 7.80264 4.4 12H5.6ZM12 18.4C8.46538 18.4 5.6 15.5346 5.6 12H4.4C4.4 16.1974 7.80264 19.6 12 19.6V18.4ZM14.4 12C14.4 13.3255 13.3255 14.4 12 14.4V15.6C13.9882 15.6 15.6 13.9882 15.6 12H14.4ZM12 9.6C13.3255 9.6 14.4 10.6745 14.4 12H15.6C15.6 10.0118 13.9882 8.4 12 8.4V9.6ZM9.6 12C9.6 10.6745 10.6745 9.6 12 9.6V8.4C10.0118 8.4 8.4 10.0118 8.4 12H9.6ZM12 14.4C10.6745 14.4 9.6 13.3255 9.6 12H8.4C8.4 13.9882 10.0118 15.6 12 15.6V14.4Z"
      fill="currentColor"
    />
    <path
      d="M12 5V3"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M19 12L21 12"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M12 21L12 19"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M3 12H5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
