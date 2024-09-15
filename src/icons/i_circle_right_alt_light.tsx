const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10 11L14 15L10 19" stroke="currentColor" />
    <path
      d="M9.67063 6.15333C7.43622 6.45269 5.51814 7.17072 4.31444 8.15841C3.11074 9.1461 2.71387 10.3276 3.20619 11.4577C3.69851 12.5878 5.04221 13.5798 6.95844 14.2277C8.87466 14.8756 11.2162 15.1297 13.4972 14.9373"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M19.7942 12.75C20.4845 12.1522 20.8904 11.4831 20.9807 10.7943C21.071 10.1055 20.8432 9.41563 20.3149 8.77792C19.7866 8.14022 18.972 7.57183 17.9341 7.11672C16.8962 6.66161 15.6628 6.33198 14.3294 6.15333"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
