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
      d="M10.5 8.5V3.68052C10.5 3.6298 10.5668 3.61131 10.5929 3.65479L13.4071 8.34521C13.4332 8.38869 13.5 8.3702 13.5 8.31948V3.5"
      stroke="#7E869E"
      stroke-opacity="0.25"
      stroke-linecap="round"
    />
    <path
      d="M6.19957 20.6341L11.8683 10.2414C11.9252 10.1372 12.0748 10.1372 12.1317 10.2414L17.8004 20.6341C17.8677 20.7575 17.7436 20.8974 17.613 20.8452L13.077 19.0308C13.0291 19.0116 12.9944 18.9692 12.9852 18.9184L12.1476 14.3117C12.1177 14.1475 11.8823 14.1475 11.8524 14.3117L11.0148 18.9184C11.0056 18.9692 10.9709 19.0116 10.923 19.0308L6.38697 20.8452C6.25644 20.8974 6.13226 20.7575 6.19957 20.6341Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
