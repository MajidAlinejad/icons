const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16.5 11.5V14.5" stroke="#CCD2E3" stroke-linecap="round" />
    <path d="M8.5 11.5V14.5" stroke="#CCD2E3" stroke-linecap="round" />
    <path d="M11.5 4.5V7.5" stroke="#CCD2E3" stroke-linecap="round" />
    <path
      d="M6.5 6.3C6.5 5.30589 7.30589 4.5 8.3 4.5H14.7C15.6941 4.5 16.5 5.30589 16.5 6.3V11.5H8.3C7.30589 11.5 6.5 10.6941 6.5 9.7V6.3Z"
      stroke="currentColor"
    />
    <path
      d="M4.5 13.3C4.5 12.3059 5.30589 11.5 6.3 11.5H12.5V19.5H6.3C5.30589 19.5 4.5 18.6941 4.5 17.7V13.3Z"
      stroke="currentColor"
    />
    <path
      d="M12.5 11.5H18.7C19.6941 11.5 20.5 12.3059 20.5 13.3V17.7C20.5 18.6941 19.6941 19.5 18.7 19.5H12.5V11.5Z"
      stroke="currentColor"
    />
  </svg>
);
export default SvgComponent;
