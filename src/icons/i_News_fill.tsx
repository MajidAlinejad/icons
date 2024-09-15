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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.00174 9H19.9983C19.9862 6.82497 19.8897 5.64706 19.1213 4.87868C18.2426 4 16.8284 4 14 4H10C7.17157 4 5.75736 4 4.87868 4.87868C4.1103 5.64706 4.01384 6.82497 4.00174 9ZM20 11H4V14C4 16.8284 4 18.2426 4.87868 19.1213C5.75736 20 7.17157 20 10 20H14C16.8284 20 18.2426 20 19.1213 19.1213C20 18.2426 20 16.8284 20 14V11Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
