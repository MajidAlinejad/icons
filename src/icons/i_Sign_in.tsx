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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22C17.5229 22 22 17.5228 22 12C22 6.47715 17.5229 2 12 2C6.81465 2 2.5511 5.94668 2.04938 11H11.5858L8.2929 7.70711L9.70711 6.29289L14.7071 11.2929L15.4142 12L14.7071 12.7071L9.70711 17.7071L8.2929 16.2929L11.5858 13H2.04938C2.5511 18.0533 6.81465 22 12 22Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
