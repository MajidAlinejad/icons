const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 9L15 6C15 5.05719 15 4.58579 15.2929 4.29289C15.5858 4 16.0572 4 17 4L18 4C18.9428 4 19.4142 4 19.7071 4.29289C20 4.58579 20 5.05719 20 6L20 7C20 7.94281 20 8.41421 19.7071 8.70711C19.4142 9 18.9428 9 18 9L15 9Z"
      stroke="currentColor"
      stroke-width="2"
    />
    <path d="M9 20L4 20L4 15" stroke="currentColor" stroke-width="2" />
    <path d="M4 20L15 9" stroke="currentColor" stroke-width="2" />
  </svg>
);
export default SvgComponent;
