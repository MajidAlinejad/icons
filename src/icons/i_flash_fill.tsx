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
      d="M19 19L5 19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 4L12 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.5 9L18 10M3.5 9L6 10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 5.5L16 7.5M6.5 5.5L8 7.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 19L7.83576 12.3139C7.92959 11.5633 8.56769 11 9.32417 11H14.6758C15.4323 11 16.0704 11.5633 16.1642 12.3139L17 19H7ZM12.5 12C12.2239 12 12 12.2239 12 12.5C12 12.7761 12.2239 13 12.5 13H14.5C14.7761 13 15 12.7761 15 12.5C15 12.2239 14.7761 12 14.5 12L12.5 12Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
