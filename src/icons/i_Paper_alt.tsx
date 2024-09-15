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
      d="M16 8V8C16.93 8 17.395 8 17.7765 8.10222C18.8117 8.37962 19.6204 9.18827 19.8978 10.2235C20 10.605 20 11.07 20 12V18C20 19.1046 19.1046 20 18 20V20C16.8954 20 16 19.1046 16 18V7.2C16 6.07989 16 5.51984 15.782 5.09202C15.5903 4.71569 15.2843 4.40973 14.908 4.21799C14.4802 4 13.9201 4 12.8 4H7.2C6.07989 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20H18"
      stroke="currentColor"
      stroke-width="2"
    />
    <path
      d="M12 8H8V12H12V8Z"
      stroke="currentColor"
      stroke-width="2"
      strokeLinejoin="round"
    />
    <path
      d="M8 16H12"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
