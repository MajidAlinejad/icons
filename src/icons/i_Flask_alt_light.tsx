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
      d="M14.5 6.5V10.6972C14.5 10.8946 14.5584 11.0877 14.6679 11.2519L20.4635 19.9453C20.9066 20.6099 20.4302 21.5 19.6315 21.5H4.36852C3.56982 21.5 3.09343 20.6099 3.53647 19.9453L9.33205 11.2519C9.44156 11.0877 9.5 10.8946 9.5 10.6972V6.5"
      stroke="currentColor"
      stroke-linejoin="round"
    />
    <path
      d="M15.5 4.5H16.5C17.0523 4.5 17.5 4.94772 17.5 5.5V5.5C17.5 6.05228 17.0523 6.5 16.5 6.5H7.5C6.94772 6.5 6.5 6.05228 6.5 5.5V5.5C6.5 4.94772 6.94772 4.5 7.5 4.5H11.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle cx="13.5" cy="4.5" r="0.5" fill="currentColor" />
    <path
      d="M17.5 19.5L15 15.5H9L6.5 19.5H17.5Z"
      stroke="currentColor"
      stroke-linejoin="round"
    />
  </svg>
);
export default SvgComponent;
