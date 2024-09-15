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
      d="M6.57517 12.3301L2.95169 10.8807C2.60805 10.7432 2.60805 10.2568 2.95169 10.1193L11.2572 6.79711C11.734 6.60638 12.266 6.60638 12.7428 6.79711L21.0483 10.1193C21.392 10.2568 21.392 10.7432 21.0483 10.8807L17.4248 12.3301"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 13.5C14 13.7761 14.2239 14 14.5 14C14.7761 14 15 13.7761 15 13.5H14ZM14 7.5V13.5H15V7.5H14Z"
      fill="currentColor"
    />
    <path
      d="M6.5 12.5V16.5L12 18.5L17.5 16.5V12.5C17.5 12.5 17 10.5 12 10.5C7 10.5 6.5 12.5 6.5 12.5Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgComponent;
