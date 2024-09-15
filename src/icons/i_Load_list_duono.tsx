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
      d="M2 4.5C2 4.22386 2.22386 4 2.5 4H21.5C21.7761 4 22 4.22386 22 4.5C22 4.77614 21.7761 5 21.5 5H20.1395C20.0625 5 20 5.06247 20 5.13953V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V5.13953C4 5.06247 3.93753 5 3.86047 5H2.5C2.22386 5 2 4.77614 2 4.5Z"
      fill="#7E869E"
      fillOpacity="0.25"
    />
    <path d="M12 15.5V10" stroke="currentColor" strokeLinecap="round" />
    <path
      d="M9.5 11.5L11.9063 9.57496C11.9611 9.53114 12.0389 9.53114 12.0937 9.57496L14.5 11.5"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path d="M2.5 4.5H21.5" stroke="currentColor" strokeLinecap="round" />
  </svg>
);
export default SvgComponent;
