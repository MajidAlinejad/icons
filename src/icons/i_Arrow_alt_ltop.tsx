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
      d="M12 6L12.7071 5.29289L12 4.58579L11.2929 5.29289L12 6ZM11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18L11 18ZM16.7071 9.29289L12.7071 5.29289L11.2929 6.70711L15.2929 10.7071L16.7071 9.29289ZM11.2929 5.29289L7.29289 9.29289L8.70711 10.7071L12.7071 6.70711L11.2929 5.29289ZM11 6L11 18L13 18L13 6L11 6Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
