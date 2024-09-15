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
      d="M2 9C2 7.11438 2 6.17157 2.58579 5.58579C3.17157 5 4.11438 5 6 5H18C19.8856 5 20.8284 5 21.4142 5.58579C22 6.17157 22 7.11438 22 9C22 9.4714 22 9.70711 21.8536 9.85355C21.7071 10 21.4714 10 21 10H3C2.5286 10 2.29289 10 2.14645 9.85355C2 9.70711 2 9.4714 2 9Z"
      fill="currentColor"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 18C2 19.8856 2 20.8284 2.58579 21.4142C3.17157 22 4.11438 22 6 22H18C19.8856 22 20.8284 22 21.4142 21.4142C22 20.8284 22 19.8856 22 18V13C22 12.5286 22 12.2929 21.8536 12.1464C21.7071 12 21.4714 12 21 12H3C2.5286 12 2.29289 12 2.14645 12.1464C2 12.2929 2 12.5286 2 13V18ZM8 17C8 16.4477 8.44772 16 9 16H11V14C11 13.4477 11.4477 13 12 13C12.5523 13 13 13.4477 13 14V16H15C15.5523 16 16 16.4477 16 17C16 17.5523 15.5523 18 15 18H13V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V18H9C8.44772 18 8 17.5523 8 17Z"
      fill="currentColor"
    />
    <path
      d="M7 3L7 6"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M17 3L17 6"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
