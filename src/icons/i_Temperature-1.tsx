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
      d="M12 13.5351H11C11 13.8921 11.1903 14.222 11.4993 14.4007L12 13.5351ZM8 13.5351L8.50073 14.4007C8.80972 14.222 9 13.8921 9 13.5351H8ZM11 5V13.5351H13V5H11ZM10 4C10.5523 4 11 4.44772 11 5H13C13 3.34315 11.6569 2 10 2V4ZM9 5C9 4.44772 9.44772 4 10 4V2C8.34315 2 7 3.34315 7 5H9ZM9 13.5351V5H7V13.5351H9ZM7 17C7 15.8908 7.60141 14.921 8.50073 14.4007L7.49927 12.6695C6.00738 13.5325 5 15.148 5 17H7ZM10 20C8.34315 20 7 18.6569 7 17H5C5 19.7614 7.23858 22 10 22V20ZM13 17C13 18.6569 11.6569 20 10 20V22C12.7614 22 15 19.7614 15 17H13ZM11.4993 14.4007C12.3986 14.921 13 15.8908 13 17H15C15 15.148 13.9926 13.5325 12.5007 12.6695L11.4993 14.4007Z"
      fill="currentColor"
    />
    <path
      d="M15 11H17"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15 8H17"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15 5H19"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle cx="10" cy="17" r="1" fill="currentColor" />
  </svg>
);
export default SvgComponent;
