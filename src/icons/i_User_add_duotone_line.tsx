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
      cy="8"
      r="4"
      fill="#7E869E"
      fillOpacity="0.25"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.591 16C15.1397 15.8415 14.6706 15.713 14.1888 15.6162C12.7543 15.3279 11.2457 15.3279 9.81123 15.6162C8.37727 15.9044 7.05548 16.4731 5.98314 17.2774C4.91043 18.0819 4.11626 19.1012 3.70756 20.2452C3.59608 20.5573 3.75867 20.9006 4.07072 21.0121C4.38278 21.1236 4.72613 20.961 4.83761 20.6489C5.15583 19.7582 5.78988 18.9223 6.70314 18.2374C7.61677 17.5521 8.76873 17.0497 10.0477 16.7927C10.8677 16.6279 11.7163 16.5688 12.5568 16.6154C12.9207 16.2361 13.4328 16 14 16L15.591 16Z"
      fill="currentColor"
    />
    <path
      d="M18 14L18 22"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M22 18L14 18"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
