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
      d="M5.5 15.5H18.5C19.6046 15.5 20.5 16.3954 20.5 17.5C20.5 18.6046 19.6046 19.5 18.5 19.5H5.5C4.39543 19.5 3.5 18.6046 3.5 17.5C3.5 16.3954 4.39543 15.5 5.5 15.5Z"
      stroke="currentColor"
    />
    <path
      d="M3.5 17.5C3.5 16.1273 4.4422 10.5146 5.03321 7.12905C5.19524 6.20086 5.27626 5.73676 5.51385 5.3836C5.72225 5.07384 6.01788 4.82535 6.35886 4.67333C6.74762 4.5 7.22196 4.5 8.17064 4.5H15.8294C16.778 4.5 17.2524 4.5 17.6411 4.67333C17.9821 4.82535 18.2778 5.07384 18.4861 5.3836C18.7237 5.73676 18.8048 6.20086 18.9668 7.12905C19.5578 10.5146 20.5 16.1273 20.5 17.5"
      stroke="currentColor"
    />
    <rect x="18" y="17" width="1" height="1" rx="0.5" fill="currentColor" />
    <rect x="5" y="17" width="3" height="1" rx="0.5" fill="currentColor" />
  </svg>
);
export default SvgComponent;
