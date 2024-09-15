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
      d="M3 3H21"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M5 3H19V17.9006C19 17.9373 19 17.9556 18.9959 17.9729C18.9922 17.9882 18.9861 18.0028 18.9779 18.0162C18.9686 18.0314 18.9556 18.0444 18.9297 18.0703L16.0703 20.9297C16.0444 20.9556 16.0314 20.9686 16.0162 20.9779C16.0028 20.9861 15.9882 20.9922 15.9729 20.9959C15.9556 21 15.9373 21 15.9006 21H8.2C7.07989 21 6.51984 21 6.09202 20.782C5.71569 20.5903 5.40973 20.2843 5.21799 19.908C5 19.4802 5 18.9201 5 17.8V3Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M14 21V16.15C14 16.0672 14.0672 16 14.15 16H19"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M12 13V7"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M9 10L11.8939 7.10607C11.9525 7.04749 12.0475 7.04749 12.1061 7.10607L15 10"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
