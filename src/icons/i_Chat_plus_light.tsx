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
      d="M12 5V5C15.866 5 19 8.13401 19 12V16.4545C19 16.9615 19 17.215 18.9543 17.4251C18.7879 18.1902 18.1902 18.7879 17.4251 18.9543C17.215 19 16.9615 19 16.4545 19H12C8.13401 19 5 15.866 5 12V12"
      stroke="currentColor"
    />
    <path
      d="M9 11L15 11"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5 8L5 2"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2 5L8 5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 15H15"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export default SvgComponent;
