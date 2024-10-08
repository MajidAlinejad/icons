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
      d="M8.00012 13L12.2278 16.3822C12.6557 16.7245 13.2794 16.6587 13.6264 16.2345L22.0001 6.00005"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.8051 11.9167L15.387 6.31662C15.5619 6.1029 15.5304 5.78788 15.3166 5.61302C15.1029 5.43816 14.7879 5.46966 14.6131 5.68338L10.0369 11.2765L10.8051 11.9167ZM7.63882 15.7866L6.87057 15.1464L6.2201 15.9414C6.05043 16.1488 5.74746 16.1856 5.53312 16.0248L2.30003 13.6C2.07912 13.4343 1.76571 13.4791 1.60003 13.7C1.43434 13.9209 1.47912 14.2343 1.70003 14.4L4.93312 16.8248C5.57616 17.3071 6.48506 17.1968 6.99405 16.5747L7.63882 15.7866Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
