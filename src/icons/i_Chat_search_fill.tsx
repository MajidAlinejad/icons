const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="17" cy="16" r="2.5" stroke="currentColor" strokeWidth="2" />
    <path
      d="M19 18L21 20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 10.2C2 7.67976 2 6.41965 2.49047 5.45704C2.9219 4.61031 3.61031 3.9219 4.45704 3.49047C5.41965 3 6.67976 3 9.2 3H14.8C17.3202 3 18.5804 3 19.543 3.49047C20.3897 3.9219 21.0781 4.61031 21.5095 5.45704C22 6.41965 22 7.67976 22 10.2V13.7055C21.1304 11.8136 19.2186 10.5 17 10.5C13.9624 10.5 11.5 12.9624 11.5 16C11.5 18.2186 12.8136 20.1304 14.7055 21H5.2C4.0799 21 3.51984 21 3.09202 20.782C2.71569 20.5903 2.40973 20.2843 2.21799 19.908C2 19.4802 2 18.9201 2 17.8V10.2ZM6 10C6 9.44772 6.44772 9 7 9H13C13.5523 9 14 9.44772 14 10C14 10.5523 13.5523 11 13 11H7C6.44772 11 6 10.5523 6 10ZM6 14C6 13.4477 6.44772 13 7 13H10C10.5523 13 11 13.4477 11 14C11 14.5523 10.5523 15 10 15H7C6.44772 15 6 14.5523 6 14Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
