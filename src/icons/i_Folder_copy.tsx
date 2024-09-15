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
      d="M9 6C9 5.05719 9 4.58579 9.29289 4.29289C9.58579 4 10.0572 4 11 4H12.7639C13.3653 4 13.666 4 13.9077 4.14935C14.1493 4.2987 14.2838 4.56766 14.5528 5.10557L15.5 7H19C19.9428 7 20.4142 7 20.7071 7.29289C21 7.58579 21 8.05719 21 9V12C21 12.9428 21 13.4142 20.7071 13.7071C20.4142 14 19.9428 14 19 14H11C10.0572 14 9.58579 14 9.29289 13.7071C9 13.4142 9 12.9428 9 12V6Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M6 7H5C3.89543 7 3 7.89543 3 9V10"
      stroke="currentColor"
      strokeWidth="2"
      stroke-miterlimit="1.41421"
    />
    <path
      d="M6 20H5C3.89543 20 3 19.1046 3 18V17"
      stroke="currentColor"
      strokeWidth="2"
      stroke-miterlimit="1.41421"
    />
    <path
      d="M13 20H14C15.1046 20 16 19.1046 16 18V17"
      stroke="currentColor"
      strokeWidth="2"
      stroke-miterlimit="1.41421"
    />
    <path
      d="M11 20H8"
      stroke="currentColor"
      strokeWidth="2"
      stroke-miterlimit="1.41421"
    />
    <path
      d="M3 12L3 15"
      stroke="currentColor"
      strokeWidth="2"
      stroke-miterlimit="1.41421"
    />
  </svg>
);
export default SvgComponent;
