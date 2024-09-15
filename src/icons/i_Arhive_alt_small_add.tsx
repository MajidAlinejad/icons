const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="8" r="5" stroke="currentColor" strokeWidth="2" />
    <path d="M12 5V11" stroke="currentColor" strokeWidth="2" />
    <path d="M15 8H9" stroke="currentColor" strokeWidth="2" />
    <path
      d="M21 14H18.0704C17.5464 14 17.2844 14 17.0633 14.1183C16.8422 14.2367 16.6969 14.4546 16.4063 14.8906L15.5937 16.1094C15.3031 16.5454 15.1578 16.7633 14.9367 16.8817C14.7156 17 14.4536 17 13.9296 17H10.0704C9.5464 17 9.28442 17 9.06333 16.8817C8.84223 16.7633 8.69691 16.5454 8.40627 16.1094L7.59373 14.8906C7.30309 14.4546 7.15777 14.2367 6.93667 14.1183C6.71558 14 6.4536 14 5.92963 14H3"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M7 10H6.41421C6.149 10 5.89464 10.1054 5.70711 10.2929L3.29289 12.7071C3.10536 12.8946 3 13.149 3 13.4142V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V13.4142C21 13.149 20.8946 12.8946 20.7071 12.7071L18.2929 10.2929C18.1054 10.1054 17.851 10 17.5858 10H17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
