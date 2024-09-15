const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="4"
      y="4"
      width="16"
      height="5"
      rx="1"
      stroke="currentColor"
      stroke-width="2"
    />
    <path
      d="M4 17C4 16.0572 4 15.5858 4.29289 15.2929C4.58579 15 5.05719 15 6 15H9V18C9 18.9428 9 19.4142 8.70711 19.7071C8.41421 20 7.94281 20 7 20H6C5.05719 20 4.58579 20 4.29289 19.7071C4 19.4142 4 18.9428 4 18V17Z"
      stroke="currentColor"
      stroke-width="2"
    />
    <path
      d="M15 15H18C18.9428 15 19.4142 15 19.7071 15.2929C20 15.5858 20 16.0572 20 17V18C20 18.9428 20 19.4142 19.7071 19.7071C19.4142 20 18.9428 20 18 20H17C16.0572 20 15.5858 20 15.2929 19.7071C15 19.4142 15 18.9428 15 18V15Z"
      stroke="currentColor"
      stroke-width="2"
    />
  </svg>
);
export default SvgComponent;
