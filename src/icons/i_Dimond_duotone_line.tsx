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
      d="M4.87403 12.874L10.5858 18.5858C11.2525 19.2525 11.5858 19.5858 12 19.5858C12.4142 19.5858 12.7475 19.2525 13.4142 18.5858L19.126 12.874C19.5512 12.4488 19.7639 12.2361 19.8291 11.9597C19.8944 11.6832 19.7993 11.3979 19.6091 10.8274L18.9117 8.73509C18.4717 7.41505 18.2517 6.75503 17.7279 6.37752C17.2041 6 16.5084 6 15.117 6H8.88304C7.49159 6 6.79587 6 6.2721 6.37752C5.74832 6.75503 5.52832 7.41505 5.0883 8.73509L4.39088 10.8274C4.2007 11.3979 4.10561 11.6832 4.17087 11.9597C4.23614 12.2361 4.44877 12.4488 4.87403 12.874Z"
      fill="#7E869E"
      fillOpacity="0.25"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
