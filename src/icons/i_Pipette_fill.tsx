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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.2678 14.7322C15.7367 14.2634 16.3776 14.0249 17.0309 13.9118C19.8534 13.423 22 10.9622 22 8C22 4.68629 19.3137 2 16 2C12.6863 2 10 4.68629 10 8C10 8.00002 10 8.00005 9.99998 8.00007L9.26779 8.73226C8.29149 9.70856 8.29149 11.2914 9.26779 12.2677L11.7323 14.7322C12.7086 15.7085 14.2915 15.7085 15.2678 14.7322Z"
      fill="currentColor"
    />
    <path
      d="M6.5 15.5L10.5 11.5L12.5 13.5L8.5 17.5L6.30128 18.8192C6.12422 18.9255 5.89757 18.8976 5.75156 18.7516L5.24844 18.2484C5.10243 18.1024 5.07453 17.8758 5.18077 17.6987L6.5 15.5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgComponent;
