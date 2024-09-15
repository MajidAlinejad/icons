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
      d="M8 4L8.70711 3.29289L8 2.58579L7.29289 3.29289L8 4ZM18 11C18 10.4477 17.5523 10 17 10C16.4477 10 16 10.4477 16 11L18 11ZM12.7071 7.29289L8.70711 3.29289L7.29289 4.70711L11.2929 8.70711L12.7071 7.29289ZM7.29289 3.29289L3.29289 7.29289L4.70711 8.70711L8.70711 4.70711L7.29289 3.29289ZM7 4L7 15.5L9 15.5L9 4L7 4ZM18 15.5L18 11L16 11L16 15.5L18 15.5ZM12.5 21C15.5376 21 18 18.5376 18 15.5L16 15.5C16 17.433 14.433 19 12.5 19L12.5 21ZM7 15.5C7 18.5376 9.46243 21 12.5 21L12.5 19C10.567 19 9 17.433 9 15.5L7 15.5Z"
      fill="currentColor"
    />
    <circle
      cx="2"
      cy="2"
      r="2"
      transform="matrix(4.37114e-08 1 1 -4.37114e-08 15 7)"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);
export default SvgComponent;
