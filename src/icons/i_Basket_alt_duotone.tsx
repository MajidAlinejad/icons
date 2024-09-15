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
      d="M20 10H4C3.44772 10 3 9.55228 3 9C3 8.44772 3.44772 8 4 8H20C20.5523 8 21 8.44772 21 9C21 9.55228 20.5523 10 20 10Z"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <path
      d="M6.80232 18.2209L6.19768 12.7791C6.08514 11.7663 5.22901 11 4.20991 11H19.7901C18.771 11 17.9149 11.7663 17.8023 12.7791L17.1977 18.2209C17.0851 19.2337 16.229 20 15.2099 20H8.79009C7.77099 20 6.91486 19.2337 6.80232 18.2209Z"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <path
      d="M8.5 3.5L6.5 6.5M15.5 3.5L17.5 6.5"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path d="M10.5 16.5L9.5 13.5" stroke="currentColor" strokeLinecap="round" />
    <path
      d="M13.5 16.5L14.5 13.5"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
