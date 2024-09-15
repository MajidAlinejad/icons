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
      d="M12 12H6V14H12V12ZM18 12H12V14H18V12ZM20 10C20 11.1046 19.1046 12 18 12V14C20.2091 14 22 12.2091 22 10H20ZM18 8C19.1046 8 20 8.89543 20 10H22C22 7.79086 20.2091 6 18 6V8ZM17.4763 5.54534C16.5392 3.45744 14.4409 2 12 2V4C13.6247 4 15.0253 4.96871 15.6516 6.36427L17.4763 5.54534ZM12 2C9.55912 2 7.4608 3.45744 6.52373 5.54534L8.34839 6.36427C8.97472 4.96871 10.3753 4 12 4V2ZM6 6C3.79086 6 2 7.79086 2 10H4C4 8.89543 4.89543 8 6 8V6ZM2 10C2 12.2091 3.79086 14 6 14V12C4.89543 12 4 11.1046 4 10H2ZM6.52373 5.54534C6.36893 5.89026 6.12934 6 6 6V8C7.15073 8 7.97904 7.1872 8.34839 6.36427L6.52373 5.54534ZM18 6C17.8707 6 17.6311 5.89026 17.4763 5.54534L15.6516 6.36427C16.021 7.1872 16.8493 8 18 8V6Z"
      fill="currentColor"
    />
    <path
      d="M12 19V17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M17 20V17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M7 21V17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
