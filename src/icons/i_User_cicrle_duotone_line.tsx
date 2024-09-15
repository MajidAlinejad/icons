const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx="12"
      cy="12"
      r="8.5"
      stroke="#2A4157"
      strokeOpacity="0.24"
      strokeLinecap="round"
    />
    <path
      d="M7.65489 16.8865C7.81775 15.982 8.33804 15.1454 9.14111 14.5366C9.94537 13.9268 10.9753 13.5906 12.0445 13.6002C13.1137 13.6098 14.1354 13.9644 14.9253 14.5879C15.7139 15.2105 16.2152 16.0555 16.3579 16.9622"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle
      cx="12"
      cy="9"
      r="2.4"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
