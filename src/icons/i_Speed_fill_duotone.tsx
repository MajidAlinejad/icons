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
      d="M21 14V15C21 16.1046 20.1046 17 19 17H5C3.89543 17 3 16.1046 3 15V14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14Z"
      fill="#7E869E"
      fillOpacity="0.25"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.8321 10.5548C16.1384 10.0953 16.0142 9.47441 15.5547 9.16806C15.0952 8.8617 14.4743 8.98588 14.1679 9.44541L12.4537 12.0168C12.3516 12.0058 12.2479 12.0001 12.1429 12.0001H11.8571C10.2792 12.0001 9 13.2793 9 14.8572C9 14.9361 9.06396 15.0001 9.14286 15.0001H14.8571C14.936 15.0001 15 14.9361 15 14.8572C15 14.1135 14.7158 13.4361 14.2501 12.9278L15.8321 10.5548Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
