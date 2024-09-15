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
      d="M10 16L10 15"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
    <path
      d="M8 4L6 7M16 4L18 7"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
    <path
      d="M14 16L14 15"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
    <path
      d="M5 11V11C5.5693 11 6.04756 11.4281 6.11043 11.9939L6.60464 16.4417C6.79269 18.1342 6.88672 18.9805 7.45624 19.4903C8.02576 20 8.87723 20 10.5802 20H13.4198C15.1228 20 15.9742 20 16.5438 19.4903C17.1133 18.9805 17.2073 18.1343 17.3954 16.4417L17.8896 11.9939C17.9524 11.4281 18.4307 11 19 11V11"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
    <path
      d="M19 11H5C3.89543 11 3 10.1046 3 9C3 7.89543 3.89543 7 5 7H19C20.1046 7 21 7.89543 21 9C21 10.1046 20.1046 11 19 11Z"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
