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
      d="M15 20.2071V20.85C15 20.9328 14.9328 21 14.85 21H9.15C9.06716 21 9 20.9328 9 20.85V20.2071C9 20.0745 9.05268 19.9473 9.14645 19.8536L11.4343 17.5657C11.7467 17.2533 12.2533 17.2533 12.5657 17.5657L14.8536 19.8536C14.9473 19.9473 15 20.0745 15 20.2071Z"
      fill="currentColor"
    />
    <path d="M12 11L17 8H7L12 11Z" fill="currentColor" />
    <path
      d="M12 18V12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgComponent;
