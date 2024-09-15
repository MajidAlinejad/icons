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
      d="M14 4H7.5C6.10218 4 5.40326 4 4.85195 4.22836C4.11687 4.53284 3.53284 5.11687 3.22836 5.85195C3 6.40326 3 7.10218 3 8.5V9.25C3 9.66421 3.33579 10 3.75 10H4C5.10457 10 6 10.8954 6 12C6 13.1046 5.10457 14 4 14H3.75C3.33579 14 3 14.3358 3 14.75V15.5C3 16.8978 3 17.5967 3.22836 18.1481C3.53284 18.8831 4.11687 19.4672 4.85195 19.7716C5.40326 20 6.10218 20 7.5 20H14V19C14 18.4477 14.4477 18 15 18V16C14.4477 16 14 15.5523 14 15V14C14 13.4477 14.4477 13 15 13V11C14.4477 11 14 10.5523 14 10V9C14 8.44772 14.4477 8 15 8V6C14.4477 6 14 5.55228 14 5V4Z"
      fill="currentColor"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15 6V8C15.5523 8 16 8.44772 16 9V10C16 10.5523 15.5523 11 15 11V13C15.5523 13 16 13.4477 16 14V15C16 15.5523 15.5523 16 15 16V18C15.5523 18 16 18.4477 16 19V20H16.5C17.8978 20 18.5967 20 19.1481 19.7716C19.8831 19.4672 20.4672 18.8831 20.7716 18.1481C21 17.5967 21 16.8978 21 15.5V14.75C21 14.3358 20.6642 14 20.25 14H20C18.8954 14 18 13.1046 18 12C18 10.8954 18.8954 10 20 10H20.25C20.6642 10 21 9.66421 21 9.25V8.5C21 7.10218 21 6.40326 20.7716 5.85195C20.4672 5.11687 19.8831 4.53284 19.1481 4.22836C18.5967 4 17.8978 4 16.5 4H16V5C16 5.55228 15.5523 6 15 6Z"
      fill="#7E869E"
      fillOpacity="0.25"
    />
  </svg>
);
export default SvgComponent;
