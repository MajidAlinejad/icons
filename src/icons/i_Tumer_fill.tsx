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
      d="M21 14C21 18.9706 16.9706 23 12 23C7.02944 23 3 18.9706 3 14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14ZM12 19C14.7614 19 17 16.7614 17 14C17 11.2386 14.7614 9 12 9C9.23858 9 7 11.2386 7 14C7 16.7614 9.23858 19 12 19ZM12 21C15.866 21 19 17.866 19 14C19 10.134 15.866 7 12 7C8.13401 7 5 10.134 5 14C5 17.866 8.13401 21 12 21ZM13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V11Z"
      fill="currentColor"
    />
    <path
      d="M17.5 7.5L19 6"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
    <path
      d="M10.0681 2.37059C10.1821 2.26427 10.4332 2.17033 10.7825 2.10332C11.1318 2.03632 11.5597 2 12 2C12.4403 2 12.8682 2.03632 13.2175 2.10332C13.5668 2.17033 13.8179 2.26427 13.9319 2.37059"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
