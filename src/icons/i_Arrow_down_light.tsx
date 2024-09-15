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
      d="M12 20L11.6464 20.3536L12 20.7071L12.3536 20.3536L12 20ZM12.5 5C12.5 4.72386 12.2761 4.5 12 4.5C11.7239 4.5 11.5 4.72386 11.5 5L12.5 5ZM5.64645 14.3536L11.6464 20.3536L12.3536 19.6464L6.35355 13.6464L5.64645 14.3536ZM12.3536 20.3536L18.3536 14.3536L17.6464 13.6464L11.6464 19.6464L12.3536 20.3536ZM12.5 20L12.5 5L11.5 5L11.5 20L12.5 20Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
