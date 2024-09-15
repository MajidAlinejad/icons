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
      d="M8.5 10.5L11.9752 12.4858C11.9906 12.4946 12.0094 12.4946 12.0248 12.4858L15.5 10.5"
      stroke="#7E869E"
      strokeOpacity="0.25"
    />
    <path
      d="M4.54556 19.4028L11.9547 3.59658C11.9727 3.55821 12.0273 3.55821 12.0453 3.59658L19.4544 19.4028C19.4725 19.4413 19.4373 19.4833 19.3963 19.4723L12.0129 17.5034C12.0044 17.5012 11.9956 17.5012 11.9871 17.5034L4.60371 19.4723C4.56266 19.4833 4.52752 19.4413 4.54556 19.4028Z"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
