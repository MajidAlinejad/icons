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
      d="M12 16L11.6464 16.3536L12 16.7071L12.3536 16.3536L12 16ZM12.5 4C12.5 3.72386 12.2761 3.5 12 3.5C11.7239 3.5 11.5 3.72386 11.5 4L12.5 4ZM5.64645 10.3536L11.6464 16.3536L12.3536 15.6464L6.35355 9.64645L5.64645 10.3536ZM12.3536 16.3536L18.3536 10.3536L17.6464 9.64645L11.6464 15.6464L12.3536 16.3536ZM12.5 16L12.5 4L11.5 4L11.5 16L12.5 16Z"
      fill="currentColor"
    />
    <path d="M5 21H19" stroke="currentColor" />
  </svg>
);
export default SvgComponent;
