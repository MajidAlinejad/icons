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
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.95117 15.3293L11.8529 16.8506C12.5375 17.3984 13.5355 17.293 14.0907 16.6144L22.4644 6.37994C22.6742 6.12347 22.6364 5.74546 22.38 5.53562C22.1235 5.32579 21.7455 5.36359 21.5356 5.62005L13.162 15.8546C13.0231 16.0242 12.7737 16.0505 12.6025 15.9136L10.7111 14.4005L9.95117 15.3293Z"
      fill="#7E869E"
      fillOpacity="0.25"
    />
  </svg>
);
export default SvgComponent;
