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
      d="M14 20L13.2929 20.7071L14 21.4142L14.7071 20.7071L14 20ZM6 3C5.44771 3 5 3.44772 5 4C5 4.55229 5.44771 5 6 5L6 3ZM8.29289 15.7071L13.2929 20.7071L14.7071 19.2929L9.70711 14.2929L8.29289 15.7071ZM14.7071 20.7071L19.7071 15.7071L18.2929 14.2929L13.2929 19.2929L14.7071 20.7071ZM15 20L15 10L13 10L13 20L15 20ZM8 3L6 3L6 5L8 5L8 3ZM15 10C15 6.13401 11.866 3 8 3L8 5C10.7614 5 13 7.23858 13 10L15 10Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
