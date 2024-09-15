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
      d="M8.28988 10C9.15043 7.10851 11.829 5 15 5C18.866 5 22 8.13401 22 12C22 15.866 18.866 19 15 19H6.5C4.01472 19 2 16.9853 2 14.5C2 12.0147 4.01472 10 6.5 10H8.28988Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
