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
      d="M19.5 8.5H4.5C3.94772 8.5 3.5 8.05228 3.5 7.5C3.5 6.94772 3.94772 6.5 4.5 6.5H19.5C20.0523 6.5 20.5 6.94772 20.5 7.5C20.5 8.05228 20.0523 8.5 19.5 8.5Z"
      stroke="currentColor"
    />
    <path
      d="M19.5 8.5V16.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 8.5L6.52042 15.357C6.50902 15.4369 6.56276 15.5114 6.64208 15.5258L11.9732 16.4951C11.9909 16.4983 12.0091 16.4983 12.0268 16.4951L17.3579 15.5258C17.4372 15.5114 17.491 15.4369 17.4796 15.357L16.5 8.5"
      stroke="currentColor"
      strokeLinejoin="round"
    />
    <path
      d="M6.5 13.5L11.9732 14.4951C11.9909 14.4983 12.0091 14.4983 12.0268 14.4951L17.5 13.5"
      stroke="currentColor"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgComponent;
