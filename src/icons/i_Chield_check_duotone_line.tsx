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
      d="M18.5447 6.15207L12.6303 3.61734C12.2278 3.44484 11.7722 3.44484 11.3697 3.61734L5.45535 6.15207C4.79996 6.43295 4.40953 7.11362 4.49798 7.82116L5.11096 12.725C5.31853 14.3856 6.14916 15.9053 7.43478 16.9767L10.9757 19.9274C11.5691 20.4219 12.4309 20.4219 13.0243 19.9274L16.5652 16.9767C17.8508 15.9053 18.6815 14.3856 18.889 12.725L19.502 7.82116C19.5905 7.11362 19.2 6.43295 18.5447 6.15207Z"
      fill="#7E869E"
      fill-opacity="0.25"
      stroke="currentColor"
      stroke-width="1.2"
      stroke-linecap="round"
    />
    <path
      d="M9 12L11.5687 14.5687C11.7918 14.7918 12.1633 14.7551 12.3383 14.4925L16 9"
      stroke="currentColor"
      stroke-width="1.2"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
