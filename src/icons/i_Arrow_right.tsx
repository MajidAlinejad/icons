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
      d="M20 12L20.7071 11.2929L21.4142 12L20.7071 12.7071L20 12ZM5 13C4.44771 13 4 12.5523 4 12C4 11.4477 4.44771 11 5 11V13ZM14.7071 5.29289L20.7071 11.2929L19.2929 12.7071L13.2929 6.70711L14.7071 5.29289ZM20.7071 12.7071L14.7071 18.7071L13.2929 17.2929L19.2929 11.2929L20.7071 12.7071ZM20 13H5V11H20V13Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
