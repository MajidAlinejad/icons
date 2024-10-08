const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="7.5" stroke="currentColor" />
    <path
      d="M7.53911 12.592C7.4541 11.9514 7.50805 11.3001 7.69728 10.6822C7.88651 10.0644 8.20658 9.4945 8.63573 9.01141"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M10.2124 7.8703C10.9727 7.54119 11.8091 7.42836 12.6294 7.54424"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
