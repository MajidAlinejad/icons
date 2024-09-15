const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="9.5" stroke="currentColor" />
    <path
      d="M8.54333 8.60832L10.492 13.4801C10.4971 13.4928 10.5072 13.5029 10.5199 13.508L15.3917 15.4567C15.4325 15.473 15.473 15.4325 15.4567 15.3917L13.508 10.5199C13.5029 10.5072 13.4928 10.4971 13.4801 10.492L8.60832 8.54333C8.56751 8.527 8.527 8.56751 8.54333 8.60832Z"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <path d="M13 11L11 13" stroke="currentColor" stroke-linecap="round" />
    <path
      d="M10.5 7.5V4.62071C10.5 4.57617 10.5539 4.55386 10.5854 4.58536L13.4146 7.41464C13.4461 7.44614 13.5 7.42383 13.5 7.37929V4.5"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <path
      d="M13.5 16.5H11.0811C10.7602 16.5 10.5 16.7602 10.5 17.0811V17.0811C10.5 17.3313 10.6601 17.5534 10.8974 17.6325L13.1026 18.3675C13.3399 18.4466 13.5 18.6687 13.5 18.9189V18.9189C13.5 19.2398 13.2398 19.5 12.9189 19.5H10.5"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
