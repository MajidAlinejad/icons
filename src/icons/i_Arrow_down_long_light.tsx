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
      d="M12 17L12 3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.2144 21.6427L14.273 18.2116C14.593 17.6784 14.2089 17 13.587 17L10.413 17C9.79112 17 9.40703 17.6784 9.72696 18.2116L11.7856 21.6427C11.8827 21.8045 12.1173 21.8045 12.2144 21.6427Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
