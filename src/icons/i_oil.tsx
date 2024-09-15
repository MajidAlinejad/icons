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
      d="M18 8L13 11L11 9H7M18 8L21 11M18 8L14 15H3V9H7M7 9V4M7 4H4M7 4H10"
      stroke="currentColor"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <path
      d="M3 21L4.5 19.5C4.57965 19.4203 4.61948 19.3805 4.65474 19.3485C5.41756 18.6551 6.58244 18.6551 7.34526 19.3485C7.38052 19.3805 7.42035 19.4203 7.5 19.5L7.64853 19.6485C8.39493 20.3949 9.60507 20.3949 10.3515 19.6485L10.7252 19.2748C11.3847 18.6153 12.4827 18.724 13 19.5V19.5C13.5173 20.276 14.6153 20.3847 15.2748 19.7252L15.6485 19.3515C16.3949 18.6051 17.6051 18.6051 18.3515 19.3515L20 21"
      stroke="currentColor"
      stroke-width="2"
      stroke-linejoin="round"
    />
  </svg>
);
export default SvgComponent;
