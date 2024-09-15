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
      d="M3.5 13.5V15.5C3.5 17.7091 5.29086 19.5 7.5 19.5V19.5C9.15685 19.5 10.5 18.1569 10.5 16.5V14C10.5 13.1716 11.1716 12.5 12 12.5V12.5C12.8284 12.5 13.5 13.1716 13.5 14V16.5C13.5 18.1569 14.8431 19.5 16.5 19.5V19.5C18.7091 19.5 20.5 17.7091 20.5 15.5V13.5"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <path
      d="M10.5 13.5H3.5L6.35588 4.93237C6.44816 4.65553 6.64663 4.42668 6.90764 4.29618V4.29618C7.63923 3.93039 8.5 4.46237 8.5 5.28031V5.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.5 13.5H20.5L17.6441 4.93237C17.5518 4.65553 17.3534 4.42668 17.0924 4.29618V4.29618C16.3608 3.93039 15.5 4.46237 15.5 5.28031V5.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export default SvgComponent;
