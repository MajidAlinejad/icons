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
      d="M10 12L9.29289 11.2929L8.58579 12L9.29289 12.7071L10 12ZM20 13C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11V13ZM15.2929 5.29289L9.29289 11.2929L10.7071 12.7071L16.7071 6.70711L15.2929 5.29289ZM9.29289 12.7071L15.2929 18.7071L16.7071 17.2929L10.7071 11.2929L9.29289 12.7071ZM10 13H20V11H10V13Z"
      fill="currentColor"
    />
    <path d="M4 5L4 19" stroke="currentColor" strokeWidth="2" />
  </svg>
);
export default SvgComponent;
