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
      d="M17.6076 21L15.1344 7.80988L4 8.8221V17.8C4 18.9201 4 19.4802 4.21799 19.908C4.40973 20.2843 4.71569 20.5903 5.09202 20.782C5.51984 21 6.0799 21 7.2 21H17.6076ZM13.5 15.0294C13.5 17.1878 11.3603 18.704 10.4269 19.2628C10.1623 19.4211 9.83768 19.4211 9.57313 19.2628C8.63974 18.704 6.5 17.1878 6.5 15.0294C6.5 12.9118 8.19587 11.5 10 11.5C11.8667 11.5 13.5 12.9118 13.5 15.0294Z"
      fill="currentColor"
    />
    <path
      d="M4.21799 4.09202C4 4.51984 4 5.0799 4 6.2V6.81385L21.9895 5.17845C21.9711 4.68953 21.9206 4.36404 21.782 4.09202C21.5903 3.71569 21.2843 3.40973 20.908 3.21799C20.4802 3 19.9201 3 18.8 3H7.2C6.0799 3 5.51984 3 5.09202 3.21799C4.71569 3.40973 4.40973 3.71569 4.21799 4.09202Z"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <path
      d="M22 7.18574L17.1352 7.62799L19.6414 20.9947C20.2329 20.9818 20.6039 20.937 20.908 20.782C21.2843 20.5903 21.5903 20.2843 21.782 19.908C22 19.4802 22 18.9201 22 17.8V7.18574Z"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <circle cx="10" cy="15" r="1" fill="currentColor" />
  </svg>
);
export default SvgComponent;
