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
      d="M6.90111 11.8461C7.55156 9.56955 9.63235 8 12 8C14.3677 8 16.4484 9.56954 17.0989 11.8461L17.6571 13.7998C17.8843 14.5951 18.2336 15.3504 18.6924 16.0386L18.8012 16.2018C18.9408 16.4111 19.0105 16.5158 19.045 16.5932C19.3105 17.1894 18.943 17.8759 18.2997 17.9857C18.2162 18 18.0904 18 17.8388 18H6.16116C5.90958 18 5.78379 18 5.70027 17.9857C5.05697 17.8759 4.68952 17.1894 4.955 16.5932C4.98947 16.5158 5.05924 16.4111 5.19879 16.2018L5.30758 16.0386C5.76642 15.3504 6.11569 14.5951 6.34293 13.7998L6.90111 11.8461Z"
      fill="currentColor"
    />
    <path
      d="M11 9L12 3"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M13 9L12 3"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M12.5 21H11.5"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
