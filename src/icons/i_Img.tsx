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
      d="M5.90962 10.7671L3 14V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17V15L18.9142 12.9142C18.1331 12.1331 16.8668 12.1331 16.0858 12.9141L14.594 14.4058C13.7462 15.2536 12.348 15.17 11.6072 14.2272L8.96882 10.8693C8.20183 9.8932 6.74009 9.84434 5.90962 10.7671Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <circle cx="18.5" cy="6.5" r="2.5" fill="currentColor" />
  </svg>
);
export default SvgComponent;
