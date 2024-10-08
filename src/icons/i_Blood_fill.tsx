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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.3025 3.79271C9.72117 5.66781 6 10.5528 6 15C6 18.3137 8.68629 21 12 21C15.3137 21 18 18.3137 18 15C18 10.5528 14.2788 5.66781 12.6975 3.79271C12.327 3.35336 11.673 3.35336 11.3025 3.79271ZM10 18C10.5523 18 11 17.5523 11 17C11 16.4477 10.5523 16 10 16C9.44772 16 9 16.4477 9 17C9 17.5523 9.44772 18 10 18Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
