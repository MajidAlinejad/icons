const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 9C2 7.89543 2.89543 7 4 7H6.27924C6.70967 7 7.09181 6.72457 7.22792 6.31623L7.77208 4.68377C7.90819 4.27543 8.29033 4 8.72076 4H15.2792C15.7097 4 16.0918 4.27543 16.2279 4.68377L16.7721 6.31623C16.9082 6.72457 17.2903 7 17.7208 7H20C21.1046 7 22 7.89543 22 9V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V9Z"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <path
      d="M13.5 5.5H10.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle cx="12" cy="13" r="4" fill="currentColor" />
  </svg>
);
export default SvgComponent;
