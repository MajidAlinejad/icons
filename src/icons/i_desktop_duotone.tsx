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
      d="M3.5 6C3.5 5.17157 4.17157 4.5 5 4.5H19C19.8284 4.5 20.5 5.17157 20.5 6V16.5H3.5V6Z"
      stroke="#2A4157"
      strokeOpacity="0.24"
    />
    <path
      d="M1.5 17C1.5 16.7239 1.72386 16.5 2 16.5H22C22.2761 16.5 22.5 16.7239 22.5 17C22.5 17.8284 21.8284 18.5 21 18.5H3C2.17157 18.5 1.5 17.8284 1.5 17Z"
      stroke="currentColor"
    />
  </svg>
);
export default SvgComponent;
