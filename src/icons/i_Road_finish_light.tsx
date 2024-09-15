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
      d="M16.5 10.5H18.3C19.4201 10.5 19.9802 10.5 20.408 10.718C20.7843 10.9097 21.0903 11.2157 21.282 11.592C21.5 12.0198 21.5 12.5799 21.5 13.7V17.3C21.5 18.4201 21.5 18.9802 21.282 19.408C21.0903 19.7843 20.7843 20.0903 20.408 20.282C19.9802 20.5 19.4201 20.5 18.3 20.5H5.7C4.5799 20.5 4.01984 20.5 3.59202 20.282C3.21569 20.0903 2.90973 19.7843 2.71799 19.408C2.5 18.9802 2.5 18.4201 2.5 17.3V13.7C2.5 12.5799 2.5 12.0198 2.71799 11.592C2.90973 11.2157 3.21569 10.9097 3.59202 10.718C4.01984 10.5 4.5799 10.5 5.7 10.5H7.5"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <path
      d="M5.5 20.5L7.5 10.5M18.5 20.5L16.5 10.5"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <path d="M12 17.5V15.5" stroke="currentColor" stroke-linecap="round" />
    <path
      d="M12 7.5V4C12 3.7643 12 3.64645 12.0732 3.57322C12.1464 3.5 12.2643 3.5 12.5 3.5H18.5L16.5 5.5L18.5 7.5H12ZM12 7.5V12"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export default SvgComponent;
