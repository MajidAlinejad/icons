const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx="18"
      cy="7"
      r="1"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
    <path
      d="M5.18601 18H14.814C15.7609 18 16.3348 16.9546 15.8264 16.1557L11.0124 8.5909C10.5408 7.84991 9.45915 7.84991 8.98761 8.59091L4.17361 16.1557C3.66524 16.9546 4.2391 18 5.18601 18Z"
      fill="currentColor"
    />
    <path
      d="M12.2422 18H19.7578C20.7162 18 21.2879 16.9318 20.7562 16.1344L16.9985 10.4977C16.5235 9.78521 15.4765 9.78521 15.0015 10.4977L11.2438 16.1344C10.7121 16.9318 11.2838 18 12.2422 18Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
