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
      d="M12 17L12 3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.2034 21.7152L16.0964 16.265C16.4746 15.7355 16.0961 15 15.4454 15L8.55455 15C7.90385 15 7.52535 15.7355 7.90356 16.265L11.7966 21.7152C11.8963 21.8548 12.1037 21.8548 12.2034 21.7152Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
