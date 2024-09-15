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
      d="M6.19957 20.6341L11.8683 10.2414C11.9252 10.1372 12.0748 10.1372 12.1317 10.2414L17.8004 20.6341C17.8677 20.7575 17.7436 20.8974 17.613 20.8452L13.077 19.0308C13.0291 19.0116 12.9944 18.9692 12.9852 18.9184L12.1476 14.3117C12.1177 14.1475 11.8823 14.1475 11.8524 14.3117L11.0148 18.9184C11.0056 18.9692 10.9709 19.0116 10.923 19.0308L6.38697 20.8452C6.25644 20.8974 6.13226 20.7575 6.19957 20.6341Z"
      fill="currentColor"
    />
    <path
      d="M9 9V3.12071C9 3.07617 9.05386 3.05386 9.08536 3.08536L14.9146 8.91465C14.9461 8.94614 15 8.92383 15 8.87929V3"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
