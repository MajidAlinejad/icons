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
      d="M6.49999 16L8.83423 16.7182C10.9043 17.3552 13 15.8073 13 13.6415C13 9.2432 18 10 18 5C18 5 7.5 5 6.16458 15.9114L6.49999 16Z"
      fill="#7E869E"
      fillOpacity="0.25"
    />
    <path
      d="M6.5 21.5L6.17696 17.9466C5.54494 10.9943 11.019 5 18 5V5"
      stroke="currentColor"
    />
  </svg>
);
export default SvgComponent;
