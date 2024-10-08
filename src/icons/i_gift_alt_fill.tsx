const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="1" y="9" width="20" height="4" rx="2" fill="currentColor" />
    <path
      d="M12 6.5V10H8.5C6.567 10 5 8.433 5 6.5C5 4.567 6.567 3 8.5 3C10.433 3 12 4.567 12 6.5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 7.5V10H14.5C15.8807 10 17 8.88071 17 7.5C17 6.11929 15.8807 5 14.5 5C13.1193 5 12 6.11929 12 7.5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 14V20.4C4 20.9601 4 21.2401 4.10899 21.454C4.20487 21.6422 4.35785 21.7951 4.54601 21.891C4.75992 22 5.03995 22 5.6 22H16.4C16.9601 22 17.2401 22 17.454 21.891C17.6422 21.7951 17.7951 21.6422 17.891 21.454C18 21.2401 18 20.9601 18 20.4V14H13V21H12V14H4ZM4.00959 13H12.5H17.9904C17.9784 12.8039 17.9515 12.6648 17.891 12.546C17.7951 12.3578 17.6422 12.2049 17.454 12.109C17.2401 12 16.9601 12 16.4 12H5.6C5.03995 12 4.75992 12 4.54601 12.109C4.35785 12.2049 4.20487 12.3578 4.10899 12.546C4.04849 12.6648 4.02157 12.8039 4.00959 13Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
