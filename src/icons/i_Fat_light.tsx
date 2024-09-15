const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" />
    <path
      d="M15 12L15.6263 11.2632C16.475 10.2647 18.1042 10.9576 17.9739 12.2615V12.2615C17.833 13.6704 19.6928 14.3019 20.4389 13.0985L20.5 13"
      stroke="currentColor"
    />
    <path
      d="M9 12L8.82254 13.0056C8.54237 14.5932 6.27667 14.628 5.94787 13.0498L5.77663 12.2278C5.53741 11.0795 3.96205 10.9219 3.5 12V12"
      stroke="currentColor"
    />
    <circle cx="9.5" cy="6.5" r="0.5" stroke="currentColor" />
    <circle cx="16.5" cy="8.5" r="0.5" stroke="currentColor" />
    <circle cx="13.5" cy="5.5" r="0.5" stroke="currentColor" />
  </svg>
);
export default SvgComponent;
