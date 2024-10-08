const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="8.5" stroke="#2A4157" strokeOpacity="0.24" />
    <path
      d="M5 2.80385C4.08789 3.33046 3.33046 4.08788 2.80385 5"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M19 2.80385C19.9121 3.33046 20.6695 4.08788 21.1962 5"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M9.5 9.5H14.1379C14.2715 9.5 14.3384 9.66157 14.2439 9.75607L9.75607 14.2439C9.66157 14.3384 9.7285 14.5 9.86213 14.5H14.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgComponent;
