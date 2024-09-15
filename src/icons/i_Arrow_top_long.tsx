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
      d="M12 7L12 21"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.7966 2.28481L7.90356 7.73501C7.52535 8.2645 7.90385 9 8.55455 9L15.4454 9C16.0961 9 16.4746 8.2645 16.0964 7.73501L12.2034 2.28481C12.1037 2.14522 11.8963 2.14522 11.7966 2.28481Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
