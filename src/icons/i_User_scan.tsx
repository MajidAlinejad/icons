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
      d="M17 4H17.502C18.7134 4 19.319 4 19.7834 4.232C20.2095 4.44495 20.5551 4.79048 20.768 5.21665C21 5.68096 21 6.28664 21 7.498V8M17 20H17.502C18.7134 20 19.319 20 19.7834 19.768C20.2095 19.5551 20.5551 19.2095 20.768 18.7834C21 18.319 21 17.7134 21 16.502V16M7 4H6.498C5.28664 4 4.68096 4 4.21665 4.232C3.79048 4.44495 3.44495 4.79048 3.232 5.21665C3 5.68096 3 6.28664 3 7.498V8M7 20H6.498C5.28664 20 4.68096 20 4.21665 19.768C3.79048 19.5551 3.44495 19.2095 3.232 18.7834C3 18.319 3 17.7134 3 16.502V16"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
    <path
      d="M7.62584 17.0695C8.0447 16.4649 8.66228 15.9421 9.43355 15.571C10.2049 15.1999 11.0906 15 12 15C12.9094 15 13.7951 15.1999 14.5664 15.571C15.3377 15.9421 15.9553 16.4649 16.3742 17.0695"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
    <circle
      cx="12"
      cy="9"
      r="3"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
