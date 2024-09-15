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
      d="M6 14H18C19.6569 14 21 15.3431 21 17C21 18.6569 19.6569 20 18 20H6C4.34315 20 3 18.6569 3 17C3 15.3431 4.34315 14 6 14Z"
      stroke="currentColor"
      stroke-width="2"
    />
    <path
      d="M3 17C3 15.5899 4.49122 9.70622 5.37093 6.3579C5.59029 5.523 5.69997 5.10554 5.942 4.7879C6.15403 4.5096 6.44174 4.28772 6.76478 4.15336C7.1335 4 7.57038 4 8.44415 4H15.5559C16.4296 4 16.8665 4 17.2352 4.15336C17.5583 4.28772 17.846 4.5096 18.058 4.7879C18.3 5.10554 18.4097 5.523 18.6291 6.3579C19.5088 9.70622 21 15.5899 21 17"
      stroke="currentColor"
      stroke-width="2"
    />
    <rect x="17" y="16" width="2" height="2" rx="1" fill="currentColor" />
    <rect x="5" y="16" width="4" height="2" rx="1" fill="currentColor" />
  </svg>
);
export default SvgComponent;
