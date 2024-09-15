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
      d="M6 13H12H18C19.6569 13 21 11.6569 21 10C21 8.34315 19.6569 7 18 7C17.36 7 16.826 6.53873 16.5639 5.95481C15.7822 4.21307 14.0328 3 12 3C9.96722 3 8.21776 4.21308 7.43606 5.95481C7.17399 6.53873 6.64004 7 6 7C4.34315 7 3 8.34315 3 10C3 11.6569 4.34315 13 6 13Z"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <path
      d="M12 12.4H6V13.6H12V12.4ZM18 12.4H12V13.6H18V12.4ZM20.4 10C20.4 11.3255 19.3255 12.4 18 12.4V13.6C19.9882 13.6 21.6 11.9882 21.6 10H20.4ZM18 7.6C19.3255 7.6 20.4 8.67452 20.4 10H21.6C21.6 8.01178 19.9882 6.4 18 6.4V7.6ZM17.1113 5.70913C16.2364 3.75969 14.2776 2.4 12 2.4V3.6C13.7879 3.6 15.3281 4.66646 16.0165 6.20048L17.1113 5.70913ZM12 2.4C9.72236 2.4 7.76359 3.75969 6.88866 5.70913L7.98345 6.20048C8.67194 4.66646 10.2121 3.6 12 3.6V2.4ZM6 6.4C4.01177 6.4 2.4 8.01178 2.4 10H3.6C3.6 8.67452 4.67452 7.6 6 7.6V6.4ZM2.4 10C2.4 11.9882 4.01177 13.6 6 13.6V12.4C4.67452 12.4 3.6 11.3255 3.6 10H2.4ZM6.88866 5.70913C6.69095 6.14965 6.33362 6.4 6 6.4V7.6C6.94645 7.6 7.65702 6.92781 7.98345 6.20048L6.88866 5.70913ZM18 6.4C17.6664 6.4 17.309 6.14965 17.1113 5.70913L16.0165 6.20048C16.343 6.92781 17.0535 7.6 18 7.6V6.4Z"
      fill="currentColor"
    />
    <path
      d="M12 18V16"
      stroke="currentColor"
      stroke-width="1.2"
      strokeLinecap="round"
    />
    <path
      d="M17 19V16"
      stroke="currentColor"
      stroke-width="1.2"
      strokeLinecap="round"
    />
    <path
      d="M7 20V16"
      stroke="currentColor"
      stroke-width="1.2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
