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
      d="M18.8964 10H8V14H13.5H14.7324C14.8996 14 15.0557 13.9164 15.1484 13.7774L15.584 13.124C15.7819 12.8272 16.2181 12.8272 16.416 13.124L16.792 13.688C16.8909 13.8364 17.1091 13.8364 17.208 13.688L17.584 13.124C17.7819 12.8272 18.2181 12.8272 18.416 13.124L18.8308 13.7463C18.9184 13.8775 19.1041 13.8959 19.2156 13.7844L20.8232 12.1768C20.9209 12.0791 20.9209 11.9209 20.8232 11.8232L19.0732 10.0732C19.0263 10.0263 18.9628 10 18.8964 10Z"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <rect x="10" y="11" width="6" height="1" rx="0.5" fill="currentColor" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.58579 8.58579C3 9.17157 3 10.1144 3 12C3 13.8856 3 14.8284 3.58579 15.4142C4.17157 16 5.11438 16 7 16C8.88562 16 9.82843 16 10.4142 15.4142C11 14.8284 11 13.8856 11 12C11 10.1144 11 9.17157 10.4142 8.58579C9.82843 8 8.88562 8 7 8C5.11438 8 4.17157 8 3.58579 8.58579ZM6 10C5.44772 10 5 10.4477 5 11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11C7 10.4477 6.55228 10 6 10Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
