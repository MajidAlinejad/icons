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
      d="M17.8284 5.82843L18.1716 6.17158C19.7337 7.73367 19.7337 10.2663 18.1716 11.8284L15.5031 14.4969C12.3137 14.2161 9.78386 11.6863 9.50312 8.49689L12.1716 5.82843C13.7337 4.26634 16.2663 4.26634 17.8284 5.82843ZM7.78826 10.2117L5.82842 12.1716C4.26633 13.7337 4.26633 16.2663 5.82843 17.8284L6.17157 18.1716C7.73367 19.7337 10.2663 19.7337 11.8284 18.1716L13.7883 16.2117C10.8779 15.4083 8.59169 13.1221 7.78826 10.2117Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
