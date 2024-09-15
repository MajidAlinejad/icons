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
      d="M8 7C8 6.05719 8 5.58579 8.29289 5.29289C8.58579 5 9.05719 5 10 5H11.7639C12.3653 5 12.666 5 12.9077 5.14935C13.1493 5.2987 13.2838 5.56766 13.5528 6.10557L14.5 8H18C18.9428 8 19.4142 8 19.7071 8.29289C20 8.58579 20 9.05719 20 10V13C20 13.9428 20 14.4142 19.7071 14.7071C19.4142 15 18.9428 15 18 15H10C9.05719 15 8.58579 15 8.29289 14.7071C8 14.4142 8 13.9428 8 13V7Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M17 15V17.4C17 17.9601 17 18.2401 16.891 18.454C16.7951 18.6422 16.6422 18.7951 16.454 18.891C16.2401 19 15.9601 19 15.4 19H5.6C5.03995 19 4.75992 19 4.54601 18.891C4.35785 18.7951 4.20487 18.6422 4.10899 18.454C4 18.2401 4 17.9601 4 17.4V9.6C4 9.03995 4 8.75992 4.10899 8.54601C4.20487 8.35785 4.35785 8.20487 4.54601 8.10899C4.75992 8 5.03995 8 5.6 8H8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgComponent;
