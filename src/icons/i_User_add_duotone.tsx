const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="8" r="4" fill="#7E869E" fillOpacity="0.25" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 13C8.33033 13 5.32016 15.4204 5.02395 18.5004C4.99752 18.7753 5.22389 19 5.50003 19H18.5C18.7762 19 19.0025 18.7753 18.9761 18.5004C18.6799 15.4204 15.6697 13 12 13Z"
      fill="#7E869E"
      fillOpacity="0.25"
    />
    <path d="M18.5 13.5V19.5" stroke="currentColor" strokeLinecap="round" />
    <path d="M15.5 16.5H21.5" stroke="currentColor" strokeLinecap="round" />
  </svg>
);
export default SvgComponent;
