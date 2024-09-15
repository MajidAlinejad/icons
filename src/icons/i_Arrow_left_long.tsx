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
      d="M7 12H21"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2.28481 11.7966L7.73501 7.90356C8.2645 7.52535 9 7.90385 9 8.55455V15.4454C9 16.0961 8.2645 16.4746 7.73501 16.0964L2.28481 12.2034C2.14522 12.1037 2.14522 11.8963 2.28481 11.7966Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
