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
      d="M4 7.65686C4 6.83935 4 6.4306 4.15224 6.06306C4.30448 5.69552 4.59351 5.40649 5.17157 4.82843L5.82843 4.17157C6.40649 3.59351 6.69552 3.30448 7.06306 3.15224C7.4306 3 7.83935 3 8.65685 3H15.3431C16.1606 3 16.5694 3 16.9369 3.15224C17.3045 3.30448 17.5935 3.59351 18.1716 4.17157L18.8284 4.82843C19.4065 5.40649 19.6955 5.69552 19.8478 6.06306C20 6.4306 20 6.83935 20 7.65685V17C20 18.8856 20 19.8284 19.4142 20.4142C18.8284 21 17.8856 21 16 21H8C6.11438 21 5.17157 21 4.58579 20.4142C4 19.8284 4 18.8856 4 17V7.65686Z"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="M4 7H20"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M9 11C9 11.7956 9.31607 12.5587 9.87868 13.1213C10.4413 13.6839 11.2044 14 12 14C12.7956 14 13.5587 13.6839 14.1213 13.1213C14.6839 12.5587 15 11.7957 15 11"
      stroke="#7E869E"
      strokeOpacity="0.25"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
