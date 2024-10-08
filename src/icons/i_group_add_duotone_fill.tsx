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
      d="M11.0141 18.5002C11.1464 16.1774 12.2135 14 14.5 14C16.7865 14 17.8536 16.1774 17.9859 18.5002C18.0016 18.7759 17.7761 19 17.5 19H11.5C11.2239 19 10.9984 18.7759 11.0141 18.5002Z"
      fill="#2A4157"
      fillOpacity="0.24"
    />
    <circle cx="14.5" cy="10.5" r="2.5" fill="#2A4157" fillOpacity="0.24" />
    <path
      d="M5.01399 18.5002C5.17295 15.6757 6.69457 13 10 13C13.3054 13 14.827 15.6757 14.986 18.5002C15.0015 18.7759 14.7761 19 14.5 19H5.5C5.22386 19 4.99848 18.7759 5.01399 18.5002Z"
      fill="currentColor"
    />
    <circle cx="10" cy="9" r="3" fill="currentColor" />
    <path
      d="M18.5 4.5V8.5M20.5 6.5L16.5 6.5"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
