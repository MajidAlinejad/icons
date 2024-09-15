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
      d="M20.5433 6.7039C21 7.80653 21 9.20435 21 12C21 14.7956 21 16.1935 20.5433 17.2961C19.9343 18.7663 18.7663 19.9343 17.2961 20.5433C16.1935 21 14.7956 21 12 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15V12C3 9.20435 3 7.80653 3.45672 6.7039C4.06569 5.23373 5.23373 4.06569 6.7039 3.45672C7.80653 3 9.20435 3 12 3C14.7956 3 16.1935 3 17.2961 3.45672C18.7663 4.06569 19.9343 5.23373 20.5433 6.7039ZM12 8.00014C12.5523 8.00014 13 8.44786 13 9.00014V10.9997H15C15.5523 10.9997 16 11.4474 16 11.9997C16 12.5519 15.5523 12.9997 15 12.9997H13V15.0001C13 15.5524 12.5523 16.0001 12 16.0001C11.4477 16.0001 11 15.5524 11 15.0001V12.9997H9C8.44772 12.9997 8 12.5519 8 11.9997C8 11.4474 8.44772 10.9997 9 10.9997H11V9.00014C11 8.44786 11.4477 8.00014 12 8.00014Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
