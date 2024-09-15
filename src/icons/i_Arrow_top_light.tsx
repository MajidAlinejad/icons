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
      d="M12 4L11.6464 3.64645L12 3.29289L12.3536 3.64645L12 4ZM12.5 19C12.5 19.2761 12.2761 19.5 12 19.5C11.7239 19.5 11.5 19.2761 11.5 19L12.5 19ZM5.64645 9.64645L11.6464 3.64645L12.3536 4.35355L6.35355 10.3536L5.64645 9.64645ZM12.3536 3.64645L18.3536 9.64645L17.6464 10.3536L11.6464 4.35355L12.3536 3.64645ZM12.5 4L12.5 19L11.5 19L11.5 4L12.5 4Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
