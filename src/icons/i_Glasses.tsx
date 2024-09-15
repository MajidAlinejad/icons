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
      d="M3 14V15C3 17.2091 4.79086 19 7 19V19C8.65685 19 10 17.6569 10 16V15C10 13.8954 10.8954 13 12 13V13C13.1046 13 14 13.8954 14 15V16C14 17.6569 15.3431 19 17 19V19C19.2091 19 21 17.2091 21 15V14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M14 14H21L18.3249 5.97456C18.125 5.37499 17.6101 4.93502 16.9867 4.83112V4.83112C15.9467 4.65779 15 5.45978 15 6.51411V7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 14H3L5.67515 5.97456C5.875 5.37499 6.3899 4.93502 7.0133 4.83112V4.83112C8.05328 4.65779 9 5.45978 9 6.51411V7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgComponent;
