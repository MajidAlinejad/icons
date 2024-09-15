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
      d="M6 3H18C18.5523 3 19 3.44772 19 4V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V4C5 3.44772 5.44772 3 6 3Z"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 3L15.3002 7.6247C15.1105 7.86191 14.8232 8 14.5194 8H9.48062C9.17684 8 8.88953 7.86191 8.69976 7.6247L5 3"
      stroke="currentColor"
      stroke-width="2"
      strokeLinejoin="round"
    />
    <path
      d="M19 21L15.3002 16.3753C15.1105 16.1381 14.8232 16 14.5194 16H9.48062C9.17684 16 8.88953 16.1381 8.69976 16.3753L5 21"
      stroke="currentColor"
      stroke-width="2"
      strokeLinejoin="round"
    />
    <path
      d="M12 13V16"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgComponent;
