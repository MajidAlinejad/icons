const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="4" y="4" width="16" height="7" rx="1" stroke="currentColor" />
    <path
      d="M4 16C4 15.0572 4 14.5858 4.29289 14.2929C4.58579 14 5.05719 14 6 14H10V18C10 18.9428 10 19.4142 9.70711 19.7071C9.41421 20 8.94281 20 8 20H6C5.05719 20 4.58579 20 4.29289 19.7071C4 19.4142 4 18.9428 4 18V16Z"
      stroke="currentColor"
    />
    <path
      d="M14 14H18C18.9428 14 19.4142 14 19.7071 14.2929C20 14.5858 20 15.0572 20 16V18C20 18.9428 20 19.4142 19.7071 19.7071C19.4142 20 18.9428 20 18 20H16C15.0572 20 14.5858 20 14.2929 19.7071C14 19.4142 14 18.9428 14 18V14Z"
      stroke="currentColor"
    />
  </svg>
);
export default SvgComponent;
