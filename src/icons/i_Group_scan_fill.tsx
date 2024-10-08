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
      d="M17 3H19C20.1046 3 21 3.89543 21 5V7M17 21H19C20.1046 21 21 20.1046 21 19V17M7 3H5C3.89543 3 3 3.89543 3 5V7M7 21H5C3.89543 21 3 20.1046 3 19V17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.0662 15.9978C14.0882 15.9993 14.1104 16 14.1328 16H17.8673C18.4688 16 18.9228 15.4678 18.6875 14.9142C18.3224 14.0554 17.557 13 16.0001 13C15.1431 13 14.5259 13.3197 14.0833 13.7504C14.479 14.134 14.7039 14.6056 14.8317 15.0178C14.9887 15.524 14.587 15.9632 14.0662 15.9978Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.9167 13.7504C9.4741 13.3197 8.85694 13 8 13C6.44304 13 5.67763 14.0554 5.31252 14.9142C5.0772 15.4678 5.53127 16 6.13277 16H9.86721C9.88962 16 9.91183 15.9993 9.9338 15.9978C9.413 15.9632 9.01128 15.5241 9.16826 15.0178C9.29607 14.6056 9.52097 14.134 9.9167 13.7504Z"
      fill="currentColor"
    />
    <path
      d="M12 13C13.8516 13 14.5604 14.1429 14.8317 15.0178C14.9953 15.5453 14.5523 16 14 16H10C9.44772 16 9.00469 15.5453 9.16826 15.0178C9.43957 14.1429 10.1484 13 12 13Z"
      fill="currentColor"
    />
    <circle cx="12" cy="9" r="2" fill="currentColor" />
    <circle cx="16" cy="9" r="2" fill="currentColor" />
    <circle cx="8" cy="9" r="2" fill="currentColor" />
  </svg>
);
export default SvgComponent;
