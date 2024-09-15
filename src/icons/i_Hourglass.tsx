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
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16 18.7771V20.85C16 20.9328 15.9328 21 15.85 21H8.15C8.06716 21 8 20.9328 8 20.85V18.7771C8 18.6047 8.08881 18.4445 8.235 18.3531L11.576 16.265C11.8354 16.1029 12.1646 16.1029 12.424 16.265L15.765 18.3531C15.9112 18.4445 16 18.6047 16 18.7771Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
