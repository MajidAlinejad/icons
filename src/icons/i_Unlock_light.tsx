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
      d="M4 13.0002C4 11.1146 4 10.1718 4.58579 9.58597C5.17157 9.00018 6.11438 9.00018 8 9.00018H16C17.8856 9.00018 18.8284 9.00018 19.4142 9.58597C20 10.1718 20 11.1146 20 13.0002V15.0002C20 17.8286 20 19.2428 19.1213 20.1215C18.2426 21.0002 16.8284 21.0002 14 21.0002H10C7.17157 21.0002 5.75736 21.0002 4.87868 20.1215C4 19.2428 4 17.8286 4 15.0002V13.0002Z"
      stroke="currentColor"
    />
    <path
      d="M16.4999 9L16.5775 8.37941C16.8364 6.30782 15.9043 4.26744 14.1688 3.10703V3.10703C12.1023 1.72537 9.36726 1.89567 7.48819 3.52299L6.66986 4.23168"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <circle cx="12" cy="15" r="2" fill="currentColor" />
  </svg>
);
export default SvgComponent;
