const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" />
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
      d="M12 6.5V11.75C12 11.8881 12.1119 12 12.25 12H16.5"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
