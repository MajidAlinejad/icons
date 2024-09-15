const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 20L19 20C19.5523 20 20 19.5523 20 19L20 5C20 4.44772 19.5523 4 19 4L16 4"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 9L15 12M12 15L15 12M15 12H5"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 4H10M12 20H10M4 7L4 5C4 4.44772 4.44772 4 5 4L6 4M4 17L4 19C4 19.5523 4.44772 20 5 20H6"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export default SvgComponent;
