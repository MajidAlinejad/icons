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
      d="M5.29289 5.29289C5 5.58579 5 6.05719 5 7V17C5 18.8856 5 19.8284 5.58579 20.4142C5.91238 20.7408 6.34994 20.8853 7 20.9493V19.5C7 18.6716 7.67157 18 8.5 18C9.32843 18 10 18.6716 10 19.5V21H14V19.5C14 18.6716 14.6716 18 15.5 18C16.3284 18 17 18.6716 17 19.5V20.9493C17.6501 20.8853 18.0876 20.7408 18.4142 20.4142C19 19.8284 19 18.8856 19 17V7C19 6.05719 19 5.58579 18.7071 5.29289C18.4142 5 17.9428 5 17 5H7C6.05719 5 5.58579 5 5.29289 5.29289Z"
      fill="#7E869E"
      fillOpacity="0.25"
    />
    <path d="M8.5 9.5L15.5 9.5" stroke="currentColor" strokeLinecap="round" />
    <path d="M8.5 12.5L12.5 12.5" stroke="currentColor" strokeLinecap="round" />
    <path d="M8.5 15.5L14.5 15.5" stroke="currentColor" strokeLinecap="round" />
  </svg>
);
export default SvgComponent;
