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
      d="M18.5 7C18.5 8.5 15.5 9.5 12 9.5C8.5 9.5 5.5 8.5 5.5 7C5.5 5.5 8.5 4.5 12 4.5C15.5 4.5 18.5 5.5 18.5 7Z"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M5.5 7L7.3131 17.4253C7.42821 18.0872 7.89747 18.6325 8.53486 18.845V18.845C10.7841 19.5947 13.2159 19.5947 15.4651 18.845V18.845C16.1025 18.6325 16.5718 18.0872 16.6869 17.4253L18.5 7"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
