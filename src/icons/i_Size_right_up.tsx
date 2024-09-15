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
      d="M3 9V6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H15"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
    <path
      d="M16 8V7H17V8H16ZM10.2071 15.2071C9.81658 15.5976 9.18342 15.5976 8.79289 15.2071C8.40237 14.8166 8.40237 14.1834 8.79289 13.7929L10.2071 15.2071ZM15 14V8H17V14H15ZM16 9H10V7H16V9ZM16.7071 8.70711L10.2071 15.2071L8.79289 13.7929L15.2929 7.29289L16.7071 8.70711Z"
      fill="currentColor"
    />
    <rect
      x="3"
      y="14"
      width="7"
      height="7"
      rx="2"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
