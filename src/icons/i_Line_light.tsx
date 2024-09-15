const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="6"
      y="13"
      width="4"
      height="4"
      rx="2"
      transform="rotate(90 6 13)"
      stroke="currentColor"
    />
    <rect
      x="17"
      y="12"
      width="4"
      height="4"
      rx="2"
      transform="rotate(-90 17 12)"
      stroke="currentColor"
    />
    <path
      d="M18 11L16.5 12.5C15.4829 13.5171 14.9744 14.0256 14.3628 14.1384C14.1229 14.1826 13.8771 14.1826 13.6372 14.1384C13.0256 14.0256 12.5171 13.5171 11.5 12.5V12.5C10.4829 11.4829 9.97442 10.9744 9.36277 10.8616C9.12295 10.8174 8.87705 10.8174 8.63723 10.8616C8.02558 10.9744 7.51705 11.4829 6.5 12.5L5 14"
      stroke="currentColor"
    />
  </svg>
);
export default SvgComponent;
