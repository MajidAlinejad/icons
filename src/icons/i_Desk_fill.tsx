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
      d="M16 3L16 6M8 3L8 6"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14 4H10L10 6C10 7.10457 9.10457 8 8 8C6.89543 8 6 7.10457 6 6L6 4.07612C5.02492 4.17203 4.36857 4.38879 3.87868 4.87868C3 5.75736 3 7.17157 3 10V15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15V10C21 7.17157 21 5.75736 20.1213 4.87868C19.6314 4.38879 18.9751 4.17203 18 4.07612L18 6C18 7.10457 17.1046 8 16 8C14.8954 8 14 7.10457 14 6L14 4ZM7 12C7 11.4477 7.44772 11 8 11L16 11C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13L8 13C7.44772 13 7 12.5523 7 12ZM8 15C7.44772 15 7 15.4477 7 16C7 16.5523 7.44772 17 8 17L16 17C16.5523 17 17 16.5523 17 16C17 15.4477 16.5523 15 16 15L8 15Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
