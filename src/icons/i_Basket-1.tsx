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
      d="M12 5L12 3"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
    <path
      d="M10 16L9.5 13"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
    <path
      d="M13.9999 16L14.4999 13"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
    <path
      d="M2 9H22V9C20.7333 9 20.1 9 19.6161 9.29969C19.456 9.39881 19.3108 9.52003 19.1846 9.65977C18.8032 10.0822 18.6899 10.7054 18.4633 11.9516L17.5972 16.7155C17.3117 18.2859 17.1689 19.071 16.6123 19.5355C16.0558 20 15.2577 20 13.6617 20H10.3383C8.74225 20 7.94422 20 7.38766 19.5355C6.83109 19.071 6.68834 18.2859 6.40283 16.7155L5.53666 11.9516C5.31007 10.7054 5.19677 10.0822 4.81536 9.65977C4.6892 9.52003 4.54395 9.39881 4.38391 9.29969C3.90002 9 3.26668 9 2 9V9Z"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
