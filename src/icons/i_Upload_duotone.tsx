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
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6 13H12H18C19.6569 13 21 11.6569 21 10C21 8.34315 19.6569 7 18 7C17.7205 7 17.5807 7 17.483 6.98034C17.185 6.92036 17.0435 6.82876 16.8667 6.58143C16.8088 6.50036 16.7272 6.31851 16.5639 5.95481C15.7822 4.21307 14.0328 3 12 3C9.96722 3 8.21776 4.21308 7.43606 5.95481C7.27282 6.31851 7.19121 6.50036 7.13328 6.58143C6.95652 6.82876 6.81502 6.92036 6.51699 6.98034C6.41931 7 6.27954 7 6 7C4.34315 7 3 8.34315 3 10C3 11.6569 4.34315 13 6 13Z"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <path
      d="M9.5 11.5L12 9M12 9L14.5 11.5M12 9L12 19"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
