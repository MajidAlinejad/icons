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
      d="M7.5 18C7.5 16.8065 7.97411 15.6619 8.81802 14.818C9.66193 13.9741 10.8065 13.5 12 13.5C13.1935 13.5 14.3381 13.9741 15.182 14.818C16.0259 15.6619 16.5 16.8065 16.5 18"
      stroke="currentColor"
    />
    <path
      d="M17.5 12.5L19.5 10.5"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path d="M5 18H19" stroke="currentColor" strokeLinecap="square" />
    <path d="M4.5 10.5L6.5 12.5" stroke="currentColor" strokeLinecap="round" />
    <path
      d="M12 2L12.3536 1.64645L12 1.29289L11.6464 1.64645L12 2ZM11.5 10.5C11.5 10.7761 11.7239 11 12 11C12.2761 11 12.5 10.7761 12.5 10.5L11.5 10.5ZM15.3536 4.64645L12.3536 1.64645L11.6464 2.35355L14.6464 5.35355L15.3536 4.64645ZM11.6464 1.64645L8.64645 4.64645L9.35355 5.35355L12.3536 2.35355L11.6464 1.64645ZM11.5 2L11.5 10.5L12.5 10.5L12.5 2L11.5 2Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
