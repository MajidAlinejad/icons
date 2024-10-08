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
      d="M19.7274 19.9294C19.2716 18.2284 18.2672 16.7252 16.8701 15.6532C15.4729 14.5811 13.7611 14 12 14C10.2389 14 8.52706 14.5811 7.12991 15.6532C5.73276 16.7252 4.72839 18.2284 4.27259 19.9294"
      stroke="#2A4157"
      strokeOpacity="0.24"
      strokeLinecap="round"
    />
    <circle
      cx="12"
      cy="8"
      r="3.5"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
