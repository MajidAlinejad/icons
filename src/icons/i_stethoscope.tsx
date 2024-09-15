const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="19" cy="14" r="2" fill="currentColor" />
    <circle cx="9" cy="13" r="2" fill="currentColor" />
    <path
      d="M19 14V16C19 18.7614 16.7614 21 14 21H12C9.5 21 9 19.4 9 13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M9 12C12.9588 12 13.9791 9.0615 13.9997 6.09273C14.0001 6.03591 13.9679 5.98395 13.9171 5.95854L12 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M9 12C5.04121 12 4.02093 9.0615 4.00032 6.09273C3.99993 6.03591 4.0321 5.98395 4.08292 5.95854L6 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
