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
      d="M5 5C5 3.89543 5.89543 3 7 3H11.75C11.8881 3 12 3.11193 12 3.25V8C12 9.10457 12.8954 10 14 10H18.75C18.8881 10 19 10.1119 19 10.25V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V5Z"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <path
      d="M13 8V3.60355C13 3.38083 13.2693 3.26929 13.4268 3.42678L18.5732 8.57322C18.7307 8.73071 18.6192 9 18.3964 9H14C13.4477 9 13 8.55228 13 8Z"
      fill="currentColor"
    />
    <path d="M8.5 13.5L14.5 13.5" stroke="currentColor" strokeLinecap="round" />
    <path d="M8.5 16.5L13.5 16.5" stroke="currentColor" strokeLinecap="round" />
  </svg>
);
export default SvgComponent;
