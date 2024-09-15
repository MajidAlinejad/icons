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
      d="M19.3612 18C20.1072 18.4561 20.5 18.9734 20.5 19.5C20.5 20.0266 20.1072 20.5439 19.3612 21C18.6152 21.4561 17.5422 21.8348 16.25 22.0981C14.9578 22.3614 13.4921 22.5 12 22.5C10.5079 22.5 9.04216 22.3614 7.75 22.0981C6.45784 21.8348 5.38482 21.4561 4.63878 21C3.89275 20.5439 3.5 20.0266 3.5 19.5C3.5 18.9734 3.89275 18.4561 4.63878 18"
      stroke="#7E869E"
      strokeOpacity="0.25"
      strokeLinecap="round"
    />
    <path
      d="M19 10C19 15.0163 13.881 18.0348 12.398 18.804C12.1452 18.9351 11.8548 18.9351 11.602 18.804C10.119 18.0348 5 15.0163 5 10C5 6.13401 8.13401 3 12 3C15.866 3 19 6.13401 19 10Z"
      fill="#7E869E"
      fillOpacity="0.25"
    />
    <circle cx="12" cy="10" r="3" fill="currentColor" />
  </svg>
);
export default SvgComponent;
