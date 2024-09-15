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
      d="M19 11V8.2C19 7.0799 19 6.51984 18.782 6.09202C18.5903 5.71569 18.2843 5.40973 17.908 5.21799C17.4802 5 16.9201 5 15.8 5H7.2C6.0799 5 5.51984 5 5.09202 5.21799C4.71569 5.40973 4.40973 5.71569 4.21799 6.09202C4 6.51984 4 7.07989 4 8.2V13.8C4 14.9201 4 15.4802 4.21799 15.908C4.40973 16.2843 4.71569 16.5903 5.09202 16.782C5.51984 17 6.07989 17 7.2 17H14"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
    <path
      d="M8 13H12"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
    <path
      d="M8 9H15"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
    <circle cx="18" cy="15" r="1" stroke="currentColor" stroke-width="2" />
    <path
      d="M20 20C20 20 19.5 19 18 19C16.5 19 16 20 16 20"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
