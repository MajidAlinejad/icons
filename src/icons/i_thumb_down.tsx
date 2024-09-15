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
      d="M8.85 5H6C5.44772 5 5 5.44771 5 6V12C5 12.5523 5.44772 13 6 13H8.85C8.93284 13 9 12.9328 9 12.85V5.15C9 5.06716 8.93284 5 8.85 5Z"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
    <path
      d="M9 13L10.8321 15.7481C10.9416 15.9123 11 16.1054 11 16.3028V19C11 19.5523 11.4477 20 12 20H13C14.1046 20 15 19.1046 15 18V13"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
    <path
      d="M13 13H17.7655C18.9575 13 19.8849 11.9639 19.7532 10.7791L19.1977 5.77914C19.0851 4.76627 18.229 4 17.2099 4H13.4142C13.149 4 12.8946 4.10536 12.7071 4.29289L12.2929 4.70711C12.1054 4.89464 11.851 5 11.5858 5H9"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
