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
      d="M12 12L18.1254 16.1694C18.6725 16.5418 19 17.1608 19 17.8227V20.5C19 20.7761 18.7761 21 18.5 21H5.5C5.22386 21 5 20.7761 5 20.5V17.8227C5 17.1608 5.32746 16.5418 5.87462 16.1694L12 12ZM12 12L18.1254 7.83062C18.6725 7.45819 19 6.83917 19 6.17729V3.5C19 3.22386 18.7761 3 18.5 3H5.5C5.22386 3 5 3.22386 5 3.5V6.17729C5 6.83917 5.32746 7.45819 5.87462 7.83062L12 12Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 22V17.5L12 13L5 17.5V22H19ZM16 20.85V18.7771C16 18.6047 15.9112 18.4445 15.765 18.3531L12.424 16.265C12.1646 16.1029 11.8354 16.1029 11.576 16.265L8.235 18.3531C8.08881 18.4445 8 18.6047 8 18.7771V20.85C8 20.9328 8.06716 21 8.15 21H15.85C15.9328 21 16 20.9328 16 20.85Z"
      fill="currentColor"
    />
    <path d="M19 7.5V3H5V7.5L12 12L19 7.5Z" fill="currentColor" />
  </svg>
);
export default SvgComponent;
