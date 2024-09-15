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
      d="M12 16V19.5"
      stroke="currentColor"
      stroke-width="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.7 9.5L7.22116 13.5141C6.54769 14.2912 7.09968 15.5 8.12799 15.5H15.8721C16.9004 15.5 17.4524 14.2912 16.7789 13.5141L13.3 9.5H10.7Z"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <path
      d="M7.22116 13.5141L6.84332 13.1866L6.84332 13.1866L7.22116 13.5141ZM10.7 9.5V9C10.555 9 10.4172 9.06295 10.3222 9.17253L10.7 9.5ZM16.7789 13.5141L16.4011 13.8415L16.4011 13.8415L16.7789 13.5141ZM13.3 9.5L13.6779 9.17253C13.5829 9.06295 13.445 9 13.3 9V9.5ZM7.599 13.8415L11.0779 9.82747L10.3222 9.17253L6.84332 13.1866L7.599 13.8415ZM8.12799 15C7.52814 15 7.20615 14.2948 7.599 13.8415L6.84332 13.1866C5.88923 14.2875 6.67121 16 8.12799 16V15ZM15.8721 15H8.12799V16H15.8721V15ZM16.4011 13.8415C16.7939 14.2948 16.4719 15 15.8721 15V16C17.3288 16 18.1108 14.2875 17.1567 13.1866L16.4011 13.8415ZM12.9222 9.82747L16.4011 13.8415L17.1567 13.1866L13.6779 9.17253L12.9222 9.82747ZM13.3 9H10.7V10H13.3V9Z"
      fill="currentColor"
    />
    <path
      d="M8.3433 7.48913L11.2628 4.30417C11.6592 3.8718 12.3408 3.8718 12.7372 4.30417L15.6567 7.48913C16.3622 8.25881 15.8162 9.5 14.7721 9.5H9.22788C8.18376 9.5 7.63776 8.25881 8.3433 7.48913Z"
      fill="#7E869E"
      fill-opacity="0.25"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgComponent;
