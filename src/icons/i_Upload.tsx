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
      d="M12 5L12.7071 4.29289L12 3.58579L11.2929 4.29289L12 5ZM11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17L11 17ZM18.7071 10.2929L12.7071 4.29289L11.2929 5.70711L17.2929 11.7071L18.7071 10.2929ZM11.2929 4.29289L5.29289 10.2929L6.70711 11.7071L12.7071 5.70711L11.2929 4.29289ZM11 5L11 17L13 17L13 5L11 5Z"
      fill="currentColor"
    />
    <path d="M5 21L19 21" stroke="currentColor" stroke-width="2" />
  </svg>
);
export default SvgComponent;
