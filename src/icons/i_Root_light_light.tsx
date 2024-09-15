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
      d="M18.5 14.5L14.5 10.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.5 14.5L18.5 10.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.5 7.5H13.5975C13.5382 7.5 13.4845 7.53491 13.4604 7.58908L9.65707 16.1466C9.60145 16.2717 9.42101 16.263 9.3777 16.1331L8.53419 13.6026C8.51377 13.5413 8.45645 13.5 8.39189 13.5H7.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export default SvgComponent;
