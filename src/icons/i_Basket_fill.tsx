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
      d="M8 5L6 9M16 5L18 9"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M21 10H19.8022C19.3335 10 18.9277 10.3255 18.826 10.7831L17.348 17.4339C17.1447 18.3489 16.3331 19 15.3957 19H8.60434C7.66695 19 6.85532 18.3489 6.65197 17.4339L5.17402 10.7831C5.07234 10.3255 4.66653 10 4.19783 10H3C2.44772 10 2 9.55228 2 9C2 8.44772 2.44772 8 3 8H21C21.5523 8 22 8.44772 22 9C22 9.55228 21.5523 10 21 10ZM11 12C11 11.4477 10.5523 11 10 11C9.44772 11 9 11.4477 9 12V15C9 15.5523 9.44772 16 10 16C10.5523 16 11 15.5523 11 15V12ZM15 12C15 11.4477 14.5523 11 14 11C13.4477 11 13 11.4477 13 12V15C13 15.5523 13.4477 16 14 16C14.5523 16 15 15.5523 15 15V12Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
