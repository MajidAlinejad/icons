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
      d="M17.0001 21L22 16M21.9999 21L17 16"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="M19.5 14V12.5C19.5 10.6144 19.5 9.67157 18.9142 9.08579C18.3284 8.5 17.3856 8.5 15.5 8.5H14.1569C13.3394 8.5 12.9306 8.5 12.5631 8.34776C12.1955 8.19552 11.9065 7.90649 11.3284 7.32843L10.6716 6.67157C10.0935 6.09351 9.80448 5.80448 9.43694 5.65224C9.0694 5.5 8.66065 5.5 7.84315 5.5H7.5C5.61438 5.5 4.67157 5.5 4.08579 6.08579C3.5 6.67157 3.5 7.61438 3.5 9.5V14.5C3.5 16.3856 3.5 17.3284 4.08579 17.9142C4.67157 18.5 5.61438 18.5 7.5 18.5H15"
      stroke="#7E869E"
      strokeOpacity="0.25"
      strokeWidth="1.2"
    />
  </svg>
);
export default SvgComponent;
