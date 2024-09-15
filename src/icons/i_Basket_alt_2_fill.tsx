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
      d="M20 10H4C3.44772 10 3 9.55228 3 9C3 8.44772 3.44772 8 4 8H20C20.5523 8 21 8.44772 21 9C21 9.55228 20.5523 10 20 10Z"
      fill="currentColor"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.19767 12.7791L6.8023 18.2209C6.91484 19.2337 7.77097 20 8.79007 20H15.2099C16.229 20 17.0851 19.2337 17.1977 18.2209L17.8023 12.7791C17.9148 11.7663 18.771 11 19.7901 11H4.2099C5.229 11 6.08513 11.7663 6.19767 12.7791ZM11 14C11 13.4477 10.5523 13 9.99999 13C9.4477 13 8.99999 13.4477 8.99999 14V17C8.99999 17.5523 9.4477 18 9.99999 18C10.5523 18 11 17.5523 11 17V14ZM15 14C15 13.4477 14.5523 13 14 13C13.4477 13 13 13.4477 13 14V17C13 17.5523 13.4477 18 14 18C14.5523 18 15 17.5523 15 17V14Z"
      fill="currentColor"
    />
    <path
      d="M8 5L6 9M16 5L18 9"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
