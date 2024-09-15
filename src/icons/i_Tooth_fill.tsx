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
      d="M12 16.375C13.4118 16.375 14.5588 19 15.5 19C17.3824 19 20 12 20 8.0625C20 6.38367 18.3824 5 16.5 5C14.6176 5 13.4118 7 12 7C10.5882 7 9.38235 5 7.5 5C5.61765 5 4 6.3125 4 8.0625C4 12 6.61765 19 8.5 19C9.44118 19 10.5882 16.375 12 16.375Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
