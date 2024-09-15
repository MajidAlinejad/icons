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
      d="M8 16V15H9V16H8ZM3.70711 21.7071C3.31658 22.0976 2.68342 22.0976 2.29289 21.7071C1.90237 21.3166 1.90237 20.6834 2.29289 20.2929L3.70711 21.7071ZM7 21V16H9V21H7ZM8 17H3V15H8V17ZM8.70711 16.7071L3.70711 21.7071L2.29289 20.2929L7.29289 15.2929L8.70711 16.7071Z"
      fill="currentColor"
    />
    <path
      d="M12 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3H7C4.79086 3 3 4.79086 3 7V12"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M8.5 8.5L11.7966 13.2616C12.4501 14.2055 13.7625 14.4067 14.6688 13.7018L16.1064 12.5838C16.9025 11.9645 18.0352 12.0351 18.7484 12.7483L21 14.9998"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor" />
  </svg>
);
export default SvgComponent;
