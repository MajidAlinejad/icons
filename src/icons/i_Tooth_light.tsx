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
      d="M12 17.5C13.5 17.5 14.5 20.5 15.5 20.5C17.5 20.5 20.5 12 20.5 8C20.5 6.08134 19 4.5 17 4.5C15 4.5 13.5 6.5 12 6.5C10.5 6.5 9 4.5 7 4.5C5 4.5 3.5 6 3.5 8C3.5 12 6.5 20.5 8.5 20.5C9.5 20.5 10.5 17.5 12 17.5Z"
      stroke="currentColor"
    />
  </svg>
);
export default SvgComponent;
