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
      r="10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M16 8L8 11"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M8 8L16 11"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M8 14.5556C8 14.504 8 14.4782 8.0019 14.4564C8.02305 14.2147 8.2147 14.0231 8.45642 14.0019C8.47817 14 8.50396 14 8.55556 14H15.4444C15.496 14 15.5218 14 15.5436 14.0019C15.7853 14.0231 15.9769 14.2147 15.9981 14.4564C16 14.4782 16 14.504 16 14.5556V15C16 17.2091 14.2091 19 12 19C9.79086 19 8 17.2091 8 15V14.5556Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
