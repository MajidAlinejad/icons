const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" />
    <path
      d="M8.52302 8.58442L9.99248 13.9724C9.99714 13.9895 10.0105 14.0029 10.0276 14.0075L15.4156 15.477C15.4529 15.4872 15.4872 15.4529 15.477 15.4156L14.0075 10.0276C14.0029 10.0105 13.9895 9.99714 13.9724 9.99248L8.58442 8.52302C8.54709 8.51284 8.51284 8.54709 8.52302 8.58442Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M13 11L11 13"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
