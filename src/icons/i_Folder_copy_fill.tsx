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
      d="M6 7H5C3.89543 7 3 7.89543 3 9V10"
      stroke="currentColor"
      strokeWidth="2"
      stroke-miterlimit="1.41421"
    />
    <path
      d="M6 20H5C3.89543 20 3 19.1046 3 18V17"
      stroke="currentColor"
      strokeWidth="2"
      stroke-miterlimit="1.41421"
    />
    <path
      d="M13 20H14C15.1046 20 16 19.1046 16 18V17"
      stroke="currentColor"
      strokeWidth="2"
      stroke-miterlimit="1.41421"
    />
    <path
      d="M11 20H8"
      stroke="currentColor"
      strokeWidth="2"
      stroke-miterlimit="1.41421"
    />
    <path
      d="M3 12L3 15"
      stroke="currentColor"
      strokeWidth="2"
      stroke-miterlimit="1.41421"
    />
    <path
      d="M8 6.2C8 5.0799 8 4.51984 8.21799 4.09202C8.40973 3.71569 8.71569 3.40973 9.09202 3.21799C9.51984 3 10.0799 3 11.2 3H12.5012C13.0521 3 13.3276 3 13.5829 3.06868C13.809 3.12953 14.0228 3.22963 14.2143 3.36443C14.4305 3.51656 14.6068 3.72818 14.9595 4.15141L16.5 6H18.8C19.9201 6 20.4802 6 20.908 6.21799C21.2843 6.40973 21.5903 6.71569 21.782 7.09202C22 7.51984 22 8.0799 22 9.2V11.8C22 12.9201 22 13.4802 21.782 13.908C21.5903 14.2843 21.2843 14.5903 20.908 14.782C20.4802 15 19.9201 15 18.8 15H11.2C10.0799 15 9.51984 15 9.09202 14.782C8.71569 14.5903 8.40973 14.2843 8.21799 13.908C8 13.4802 8 12.9201 8 11.8V6.2Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
