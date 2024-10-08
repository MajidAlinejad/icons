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
      d="M5 2.80385C4.08789 3.33046 3.33046 4.08788 2.80385 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M19 2.80385C19.9121 3.33046 20.6695 4.08788 21.1962 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM9 8C8.44772 8 8 8.44772 8 9C8 9.55228 8.44772 10 9 10H12.5858L8.54896 14.0368C7.8245 14.7613 8.3376 16 9.36213 16H15C15.5523 16 16 15.5523 16 15C16 14.4477 15.5523 14 15 14H11.4142L15.451 9.96317C16.1755 9.23871 15.6624 8 14.6379 8H9Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
