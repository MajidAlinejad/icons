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
      d="M5 8C5 7.05719 5 6.58579 5.29289 6.29289C5.58579 6 6.05719 6 7 6H13.0633C13.5239 6 13.7542 6 13.9558 6.09441C14.1574 6.18882 14.3048 6.36576 14.5997 6.71963L17.933 10.7196C18.4432 11.3318 18.6983 11.6379 18.6983 12C18.6983 12.3621 18.4432 12.6682 17.933 13.2804L14.5997 17.2804C14.3048 17.6342 14.1574 17.8112 13.9558 17.9056C13.7542 18 13.5239 18 13.0633 18H7C6.05719 18 5.58579 18 5.29289 17.7071C5 17.4142 5 16.9428 5 16V8Z"
      fill="#7E869E"
      fillOpacity="0.25"
      stroke="currentColor"
      strokeWidth="1.2"
    />
  </svg>
);
export default SvgComponent;
