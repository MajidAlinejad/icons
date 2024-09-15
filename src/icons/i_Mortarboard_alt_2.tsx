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
      d="M19.5 9H4.5C3.67157 9 3 8.32843 3 7.5C3 6.67157 3.67157 6 4.5 6H19.5C20.3284 6 21 6.67157 21 7.5C21 8.32843 20.3284 9 19.5 9Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M19 9V13"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 9L7.01826 15.8722C7.00776 15.9457 7.05256 16.0158 7.12365 16.0371L11.9569 17.4871C11.985 17.4955 12.015 17.4955 12.0431 17.4871L16.8764 16.0371C16.9474 16.0158 16.9922 15.9457 16.9817 15.8722L16 9"
      stroke="currentColor"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <path
      d="M7.5 13L11.9675 13.9928C11.9889 13.9975 12.0111 13.9975 12.0325 13.9928L16.5 13"
      stroke="currentColor"
      stroke-width="2"
      stroke-linejoin="round"
    />
  </svg>
);
export default SvgComponent;
