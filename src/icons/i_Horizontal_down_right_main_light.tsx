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
      d="M2 8L1.64645 7.64645L1.29289 8L1.64645 8.35355L2 8ZM12 8.5C12.2761 8.5 12.5 8.27614 12.5 8C12.5 7.72386 12.2761 7.5 12 7.5V8.5ZM5.64645 3.64645L1.64645 7.64645L2.35355 8.35355L6.35355 4.35355L5.64645 3.64645ZM1.64645 8.35355L5.64645 12.3536L6.35355 11.6464L2.35355 7.64645L1.64645 8.35355ZM2 8.5H12V7.5H2V8.5Z"
      fill="currentColor"
    />
    <path
      d="M22 16L22.3536 15.6464L22.7071 16L22.3536 16.3536L22 16ZM3 16.5C2.72386 16.5 2.5 16.2761 2.5 16C2.5 15.7239 2.72386 15.5 3 15.5L3 16.5ZM18.3536 11.6464L22.3536 15.6464L21.6464 16.3536L17.6464 12.3536L18.3536 11.6464ZM22.3536 16.3536L18.3536 20.3536L17.6464 19.6464L21.6464 15.6464L22.3536 16.3536ZM22 16.5L3 16.5L3 15.5L22 15.5L22 16.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
