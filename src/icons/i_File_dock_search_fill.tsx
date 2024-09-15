const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx="17.5"
      cy="17.5"
      r="2.5"
      stroke="currentColor"
      stroke-width="2"
    />
    <path
      d="M21 21L19.5 19.5"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4 10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10V13.1689C19.2646 12.7435 18.4107 12.5 17.5 12.5C14.7386 12.5 12.5 14.7386 12.5 17.5C12.5 19.4428 13.6081 21.1269 15.2268 21.9546C14.337 22 13.2765 22 12 22C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V10ZM8 5C7.44772 5 7 5.44772 7 6C7 6.55228 7.44772 7 8 7H12C12.5523 7 13 6.55228 13 6C13 5.44772 12.5523 5 12 5H8ZM8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11H14C14.5523 11 15 10.5523 15 10C15 9.44772 14.5523 9 14 9L8 9ZM8 13C7.44772 13 7 13.4477 7 14C7 14.5523 7.44772 15 8 15H11C11.5523 15 12 14.5523 12 14C12 13.4477 11.5523 13 11 13H8Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
