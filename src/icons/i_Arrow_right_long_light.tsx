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
      d="M17 12H3"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.6427 11.7856L18.2116 9.72696C17.6784 9.40703 17 9.79112 17 10.413V13.587C17 14.2089 17.6784 14.593 18.2116 14.273L21.6427 12.2144C21.8045 12.1173 21.8045 11.8827 21.6427 11.7856Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
