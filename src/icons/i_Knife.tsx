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
      d="M15 8L14.1061 7.10607C14.0475 7.04749 13.9525 7.04749 13.8939 7.10607L8 13"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.5 9.5L14.8939 11.8939C14.9525 11.9525 15.0475 11.9525 15.1061 11.8939L18.1716 8.82843C19.7337 7.26633 19.7337 4.73367 18.1716 3.17157L18.1061 3.10607C18.0475 3.04749 17.9525 3.04749 17.8939 3.10607L14 7"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.5 16.5L8.5 12.5C9.32843 11.6716 10.6716 11.6716 11.5 12.5C12.3284 13.3284 12.3284 14.6716 11.5 15.5L7.5 19.5C6.67157 20.3284 5.32843 20.3284 4.5 19.5C3.67157 18.6716 3.67157 17.3284 4.5 16.5Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.5 16.5L7 14"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export default SvgComponent;
