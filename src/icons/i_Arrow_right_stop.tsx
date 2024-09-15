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
      d="M14 12L14.7071 11.2929L15.4142 12L14.7071 12.7071L14 12ZM4 13C3.44771 13 3 12.5523 3 12C3 11.4477 3.44771 11 4 11V13ZM8.70711 5.29289L14.7071 11.2929L13.2929 12.7071L7.29289 6.70711L8.70711 5.29289ZM14.7071 12.7071L8.70711 18.7071L7.29289 17.2929L13.2929 11.2929L14.7071 12.7071ZM14 13H4V11H14V13Z"
      fill="currentColor"
    />
    <path d="M20 5L20 19" stroke="currentColor" stroke-width="2" />
  </svg>
);
export default SvgComponent;
