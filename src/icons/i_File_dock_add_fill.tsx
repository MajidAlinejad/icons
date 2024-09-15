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
      d="M12 2C13.4992 2 14.7004 2 15.6773 2.07361C15.5629 2.3601 15.5 2.6727 15.5 3V3.5H15C13.6193 3.5 12.5 4.61929 12.5 6C12.5 7.38071 13.6193 8.5 15 8.5H15.5V9C15.5 10.3807 16.6193 11.5 18 11.5C18.8178 11.5 19.5439 11.1073 20 10.5002V14C20 17.7712 20 19.6569 18.8284 20.8284C17.6569 22 15.7712 22 12 22C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2ZM8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H12C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11H8ZM8 14C7.44772 14 7 14.4477 7 15C7 15.5523 7.44772 16 8 16H14C14.5523 16 15 15.5523 15 15C15 14.4477 14.5523 14 14 14H8ZM8 17C7.44772 17 7 17.4477 7 18C7 18.5523 7.44772 19 8 19H12C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17H8Z"
      fill="currentColor"
    />
    <path
      d="M18 3L18 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M21 6L15 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
