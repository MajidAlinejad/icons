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
      d="M4 20H3.5V20.5H4V20ZM9.35355 15.3536C9.54882 15.1583 9.54882 14.8417 9.35355 14.6464C9.15829 14.4512 8.84171 14.4512 8.64645 14.6464L9.35355 15.3536ZM3.5 14V20H4.5V14H3.5ZM4 20.5H10V19.5H4V20.5ZM4.35355 20.3536L9.35355 15.3536L8.64645 14.6464L3.64645 19.6464L4.35355 20.3536Z"
      fill="currentColor"
    />
    <path
      d="M20 4H20.5V3.5H20V4ZM14.6464 8.64645C14.4512 8.84171 14.4512 9.15829 14.6464 9.35355C14.8417 9.54882 15.1583 9.54882 15.3536 9.35355L14.6464 8.64645ZM20.5 10V4H19.5V10H20.5ZM20 3.5H14V4.5H20V3.5ZM19.6464 3.64645L14.6464 8.64645L15.3536 9.35355L20.3536 4.35355L19.6464 3.64645Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
