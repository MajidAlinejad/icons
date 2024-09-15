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
      d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z"
      fill="#7E869E"
      fillOpacity="0.25"
    />
    <circle cx="12" cy="10" r="4" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.9463 20.2532C18.9616 20.3587 18.9048 20.4613 18.8063 20.5021C17.6048 21 15.8353 21 13 21H11C8.16476 21 6.3953 21 5.19377 20.5022C5.0953 20.4614 5.03846 20.3587 5.05373 20.2532C5.48265 17.2919 8.42909 15 12 15C15.571 15 18.5174 17.2919 18.9463 20.2532Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
