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
      d="M12.773 3.70613L18.7577 5.30204C19.1954 5.41878 19.5 5.81523 19.5 6.26828V12.2889C19.5 14.295 18.4974 16.1684 16.8282 17.2812L12.5547 20.1302C12.2188 20.3541 11.7812 20.3541 11.4453 20.1302L7.1718 17.2812C5.50261 16.1684 4.5 14.295 4.5 12.2889V6.26828C4.5 5.81523 4.80458 5.41878 5.24234 5.30204L11.227 3.70613C11.7335 3.57107 12.2665 3.57107 12.773 3.70613Z"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M9.5 11.5L11.3232 13.3232C11.4209 13.4209 11.5791 13.4209 11.6768 13.3232L15 10"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
