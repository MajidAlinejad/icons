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
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <circle
      cx="9"
      cy="10"
      r="1.25"
      fill="currentColor"
      stroke="currentColor"
      stroke-width="0.5"
      stroke-linecap="round"
    />
    <circle
      cx="15"
      cy="10"
      r="1.25"
      fill="currentColor"
      stroke="currentColor"
      stroke-width="0.5"
      stroke-linecap="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.62886 15C8.34908 15 8.20919 15 8.13456 15.1068C8.05993 15.2136 8.1032 15.3318 8.18974 15.5683C8.70586 16.9788 10.2166 18 12 18C13.7833 18 15.2941 16.9788 15.8102 15.5683C15.8968 15.3318 15.94 15.2136 15.8654 15.1068C15.7908 15 15.6509 15 15.3711 15H8.62886Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
