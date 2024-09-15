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
      d="M20 10L20.3536 10.3536L20.7071 10L20.3536 9.64645L20 10ZM3.5 18C3.5 18.2761 3.72386 18.5 4 18.5C4.27614 18.5 4.5 18.2761 4.5 18L3.5 18ZM15.3536 15.3536L20.3536 10.3536L19.6464 9.64645L14.6464 14.6464L15.3536 15.3536ZM20.3536 9.64645L15.3536 4.64645L14.6464 5.35355L19.6464 10.3536L20.3536 9.64645ZM20 9.5L10 9.5L10 10.5L20 10.5L20 9.5ZM3.5 16L3.5 18L4.5 18L4.5 16L3.5 16ZM10 9.5C6.41015 9.5 3.5 12.4101 3.5 16L4.5 16C4.5 12.9624 6.96243 10.5 10 10.5L10 9.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
