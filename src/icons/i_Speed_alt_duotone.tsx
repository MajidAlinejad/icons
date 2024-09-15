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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.17294 13.7558C3.51044 15.4526 4.32959 17.015 5.53086 18.257C5.58845 18.3166 5.68353 18.3165 5.74211 18.2579L9.77262 14.2274C9.83119 14.1688 9.92592 14.1691 9.98734 14.2247C10.5196 14.7065 11.2255 15 12 15C12.7745 15 13.4804 14.7065 14.0127 14.2247C14.0741 14.1691 14.1688 14.1688 14.2274 14.2274L18.2579 18.2579C18.3165 18.3165 18.4116 18.3166 18.4692 18.257C19.6704 17.015 20.4896 15.4526 20.8271 13.7558C21.1743 12.01 20.9961 10.2004 20.3149 8.55585C19.6337 6.91131 18.4802 5.50571 17.0001 4.51677C15.5201 3.52784 13.78 3 12 3C10.22 3 8.47991 3.52784 6.99987 4.51677C5.51983 5.50571 4.36628 6.91131 3.68509 8.55585C3.0039 10.2004 2.82567 12.01 3.17294 13.7558Z"
      fill="#7E869E"
      fillOpacity="0.25"
    />
    <path
      d="M12 12L17 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgComponent;
