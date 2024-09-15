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
      d="M2 14L5.23309 16.4248C5.66178 16.7463 6.26772 16.6728 6.60705 16.2581L15 6"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.87439 15.7801L11.603 17.163C12.4588 17.8477 13.7062 17.716 14.4003 16.8677L22.7739 6.63324C23.1237 6.20579 23.0607 5.57577 22.6332 5.22604C22.2058 4.87631 21.5758 4.93932 21.226 5.36676L12.8523 15.6013L11.1409 14.2321L9.87439 15.7801Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
