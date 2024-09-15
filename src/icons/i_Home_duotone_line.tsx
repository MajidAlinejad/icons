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
      d="M5.5 10V17.5C5.5 18.4428 5.5 18.9142 5.79289 19.2071C6.08579 19.5 6.55719 19.5 7.5 19.5H16.5C17.4428 19.5 17.9142 19.5 18.2071 19.2071C18.5 18.9142 18.5 18.4428 18.5 17.5V10"
      stroke="#7E869E"
      stroke-opacity="0.25"
    />
    <path
      d="M14.5 19V15C14.5 13.8954 13.6046 13 12.5 13H11.5C10.3954 13 9.5 13.8954 9.5 15V19"
      stroke="currentColor"
      stroke-linejoin="round"
    />
  </svg>
);
export default SvgComponent;
