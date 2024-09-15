const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="4"
      y="6"
      width="16"
      height="12"
      rx="2"
      stroke="currentColor"
      stroke-width="2"
    />
    <path
      d="M11.1056 12.5528L4 9V16C4 17.1046 4.89543 18 6 18H18C19.1046 18 20 17.1046 20 16V9L12.8944 12.5528C12.3314 12.8343 11.6686 12.8343 11.1056 12.5528Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
