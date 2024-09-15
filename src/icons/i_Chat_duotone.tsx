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
      d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12V18.6667C20 18.9767 20 19.1317 19.9659 19.2588C19.8735 19.6039 19.6039 19.8735 19.2588 19.9659C19.1317 20 18.9767 20 18.6667 20H12C7.58172 20 4 16.4183 4 12Z"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <path
      d="M8.5 10.5L15.5 10.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.5 13.5L13.5 13.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export default SvgComponent;
