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
      d="M21 12H18.0704C17.5464 12 17.2844 12 17.0633 12.1183C16.8422 12.2367 16.6969 12.4546 16.4063 12.8906L15.5937 14.1094C15.3031 14.5454 15.1578 14.7633 14.9367 14.8817C14.7156 15 14.4536 15 13.9296 15H10.0704C9.5464 15 9.28442 15 9.06333 14.8817C8.84223 14.7633 8.69691 14.5454 8.40627 14.1094L7.59373 12.8906C7.30309 12.4546 7.15777 12.2367 6.93667 12.1183C6.71558 12 6.4536 12 5.92963 12H3"
      stroke="currentColor"
      stroke-width="2"
    />
    <path
      d="M5 9L3.29289 10.7071C3.10536 10.8946 3 11.149 3 11.4142V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V11.4142C21 11.149 20.8946 10.8946 20.7071 10.7071L19 9"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M8.5 7L12 10M12 10L15.5 7M12 10L12 3"
      stroke="currentColor"
      stroke-width="2"
    />
  </svg>
);
export default SvgComponent;
