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
      d="M8 20C8 18.9391 8.42143 17.9217 9.17157 17.1716C9.92172 16.4214 10.9391 16 12 16C13.0609 16 14.0783 16.4214 14.8284 17.1716C15.5786 17.9217 16 18.9391 16 20"
      stroke="currentColor"
      stroke-width="2"
    />
    <path
      d="M17.5 14.5L19.5 12.5"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M5 20H19"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="square"
    />
    <path
      d="M4.49994 12.4999L6.49994 14.4999"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M12 4L12.7071 3.29289L12 2.58579L11.2929 3.29289L12 4ZM11 12.5C11 13.0523 11.4477 13.5 12 13.5C12.5523 13.5 13 13.0523 13 12.5L11 12.5ZM15.7071 6.29289L12.7071 3.29289L11.2929 4.70711L14.2929 7.70711L15.7071 6.29289ZM11.2929 3.29289L8.29289 6.29289L9.70711 7.70711L12.7071 4.70711L11.2929 3.29289ZM11 4L11 12.5L13 12.5L13 4L11 4Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
