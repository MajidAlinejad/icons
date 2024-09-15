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
      d="M17.3441 8.07519L12.8805 16.3648C12.5029 17.066 11.4971 17.066 11.1195 16.3648L6.65587 8.07519C6.17933 7.19018 7.15976 6.23415 8.03248 6.73285L11.5039 8.71649C11.8113 8.89217 12.1887 8.89217 12.4961 8.71649L15.9675 6.73285C16.8402 6.23415 17.8207 7.19018 17.3441 8.07519Z"
      fill="currentColor"
    />
    <path
      d="M4 19H9"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
    <path
      d="M15 19H20"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
