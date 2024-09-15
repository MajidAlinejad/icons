const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M14 11L10 15L14 19" stroke="currentColor" />
    <path
      d="M4.20577 12.75C3.19027 11.8706 2.79955 10.8452 3.09712 9.84068C3.3947 8.83614 4.36307 7.91146 5.84482 7.21695C7.32657 6.52244 9.23457 6.09894 11.2587 6.01529C13.2828 5.93164 15.3039 6.19277 16.9936 6.75622C18.6833 7.31966 19.9422 8.1523 20.5656 9.11879C21.189 10.0853 21.1402 11.1288 20.4273 12.0796C19.7143 13.0305 18.3791 13.8329 16.6387 14.3563C14.8982 14.8797 12.8548 15.0933 10.8408 14.9625"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
