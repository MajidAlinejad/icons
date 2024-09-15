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
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.7071 5.29289L12 4.58579L11.2929 5.29289L8.29289 8.29289L9.70711 9.70711L12 7.41421L14.2929 9.70711L15.7071 8.29289L12.7071 5.29289ZM9.70711 14.2929L12 16.5858L14.2929 14.2929L15.7071 15.7071L12.7071 18.7071L12 19.4142L11.2929 18.7071L8.29289 15.7071L9.70711 14.2929Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
