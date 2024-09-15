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
      d="M9 13L8.29289 12.2929L9 11.5858L9.70711 12.2929L9 13ZM10 22C10 22.5523 9.55229 23 9 23C8.44772 23 8 22.5523 8 22L10 22ZM3.29289 17.2929L8.29289 12.2929L9.70711 13.7071L4.70711 18.7071L3.29289 17.2929ZM9.70711 12.2929L14.7071 17.2929L13.2929 18.7071L8.29289 13.7071L9.70711 12.2929ZM10 13L10 22L8 22L8 13L10 13Z"
      fill="currentColor"
    />
    <path
      d="M15 11L14.2929 11.7071L15 12.4142L15.7071 11.7071L15 11ZM16 2C16 1.44772 15.5523 1 15 1C14.4477 1 14 1.44771 14 2L16 2ZM9.29289 6.70711L14.2929 11.7071L15.7071 10.2929L10.7071 5.29289L9.29289 6.70711ZM15.7071 11.7071L20.7071 6.70711L19.2929 5.29289L14.2929 10.2929L15.7071 11.7071ZM16 11L16 2L14 2L14 11L16 11Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
