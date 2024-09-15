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
      d="M7.39177 12.9535C7.74169 10.679 9.69875 9 12 9V9C14.3012 9 16.2583 10.679 16.6082 12.9535L16.7762 14.0454C16.9216 14.9904 17.3645 15.8645 18.0407 16.5407V16.5407C18.3947 16.8947 18.144 17.5 17.6433 17.5H6.35668C5.85603 17.5 5.60531 16.8947 5.95932 16.5407V16.5407C6.63545 15.8645 7.07839 14.9904 7.22379 14.0454L7.39177 12.9535Z"
      stroke="currentColor"
    />
    <path d="M11 9L12 3" stroke="currentColor" strokeLinecap="round" />
    <path d="M13 9L12 3" stroke="currentColor" strokeLinecap="round" />
    <path
      d="M10.0681 19.2588C10.1821 19.4715 10.4332 19.6593 10.7825 19.7934C11.1318 19.9274 11.5597 20 12 20C12.4403 20 12.8682 19.9274 13.2175 19.7934C13.5668 19.6593 13.8179 19.4715 13.9319 19.2588"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
