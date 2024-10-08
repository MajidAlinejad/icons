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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 3C5 1.89543 5.89543 1 7 1H17C18.1046 1 19 1.89543 19 3V21C19 22.1046 18.1046 23 17 23H7C5.89543 23 5 22.1046 5 21V3ZM9 3.5C9 3.22386 9.22386 3 9.5 3H14.5C14.7761 3 15 3.22386 15 3.5C15 3.77614 14.7761 4 14.5 4H9.5C9.22386 4 9 3.77614 9 3.5ZM12 21C12.5523 21 13 20.5523 13 20C13 19.4477 12.5523 19 12 19C11.4477 19 11 19.4477 11 20C11 20.5523 11.4477 21 12 21Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
