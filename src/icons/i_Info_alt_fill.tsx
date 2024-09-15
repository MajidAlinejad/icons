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
      d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9H12.01C12.5623 9 13.01 8.55228 13.01 8C13.01 7.44772 12.5623 7 12.01 7H12ZM10.5 11C9.94772 11 9.5 11.4477 9.5 12C9.5 12.5523 9.94772 13 10.5 13H11V16C11 16.5523 11.4477 17 12 17H14C14.5523 17 15 16.5523 15 16C15 15.4477 14.5523 15 14 15H13V12C13 11.4477 12.5523 11 12 11H10.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
