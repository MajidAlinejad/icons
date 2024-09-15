const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 9V15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15V9C21 6.17157 21 4.75736 20.1213 3.87868C19.2426 3 17.8284 3 15 3H9"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <path
      d="M15 15V15.5H15.5V15H15ZM7.35355 6.64645C7.15829 6.45118 6.84171 6.45118 6.64645 6.64645C6.45118 6.84171 6.45118 7.15829 6.64645 7.35355L7.35355 6.64645ZM14.5 8V15H15.5V8H14.5ZM15 14.5H8V15.5H15V14.5ZM15.3536 14.6464L7.35355 6.64645L6.64645 7.35355L14.6464 15.3536L15.3536 14.6464Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
