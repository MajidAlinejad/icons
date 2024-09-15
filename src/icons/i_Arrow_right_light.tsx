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
      d="M20 12L20.3536 11.6464L20.7071 12L20.3536 12.3536L20 12ZM5 12.5C4.72386 12.5 4.5 12.2761 4.5 12C4.5 11.7239 4.72386 11.5 5 11.5V12.5ZM14.3536 5.64645L20.3536 11.6464L19.6464 12.3536L13.6464 6.35355L14.3536 5.64645ZM20.3536 12.3536L14.3536 18.3536L13.6464 17.6464L19.6464 11.6464L20.3536 12.3536ZM20 12.5H5V11.5H20V12.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
