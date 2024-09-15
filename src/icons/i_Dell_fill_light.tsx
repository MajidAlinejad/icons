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
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12 12.7071L8.35355 16.3536L7.64645 15.6464L11.2929 12L7.64645 8.35355L8.35355 7.64645L12 11.2929L15.6464 7.64645L16.3536 8.35355L12.7071 12L16.3536 15.6464L15.6464 16.3536L12 12.7071Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
