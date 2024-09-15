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
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.7586 3.00598C13.2404 3 12.6591 3 12 3C9.20435 3 7.80653 3 6.7039 3.45672C5.23373 4.06569 4.06569 5.23373 3.45672 6.7039C3 7.80653 3 9.20435 3 12V15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H12C14.7956 21 16.1935 21 17.2961 20.5433C18.7663 19.9343 19.9343 18.7663 20.5433 17.2961C21 16.1935 21 14.7956 21 12C21 11.3409 21 10.7596 20.994 10.2414C20.464 10.7133 19.7655 11 19 11C17.3431 11 16 9.65685 16 8C14.3431 8 13 6.65685 13 5C13 4.23453 13.2867 3.53602 13.7586 3.00598ZM9 8.99966C8.44772 8.99966 8 9.44738 8 9.99966C8 10.5519 8.44772 10.9997 9 10.9997H15C15.5523 10.9997 16 10.5519 16 9.99966C16 9.44738 15.5523 8.99966 15 8.99966H9ZM9 12.9997C8.44772 12.9997 8 13.4474 8 13.9997C8 14.5519 8.44772 14.9997 9 14.9997H12C12.5523 14.9997 13 14.5519 13 13.9997C13 13.4474 12.5523 12.9997 12 12.9997H9Z"
      fill="currentColor"
    />
    <path
      d="M19 8L19 2M16 5H22"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgComponent;
