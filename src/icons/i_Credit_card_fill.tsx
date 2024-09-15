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
      d="M2.00174 10H21.9983C21.9862 7.82497 21.8897 6.64706 21.1213 5.87868C20.2426 5 18.8284 5 16 5H8C5.17157 5 3.75736 5 2.87868 5.87868C2.1103 6.64706 2.01384 7.82497 2.00174 10ZM22 12H2V14C2 16.8284 2 18.2426 2.87868 19.1213C3.75736 20 5.17157 20 8 20H16C18.8284 20 20.2426 20 21.1213 19.1213C22 18.2426 22 16.8284 22 14V12ZM7 15C6.44772 15 6 15.4477 6 16C6 16.5523 6.44772 17 7 17H7.01C7.56228 17 8.01 16.5523 8.01 16C8.01 15.4477 7.56228 15 7.01 15H7Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
