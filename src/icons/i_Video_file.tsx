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
      d="M9.5 16.382V13.618C9.5 12.8747 10.2823 12.3912 10.9472 12.7236L13.7111 14.1056C14.4482 14.4741 14.4482 15.5259 13.7111 15.8944L10.9472 17.2764C10.2823 17.6088 9.5 17.1253 9.5 16.382Z"
      fill="currentColor"
    />
    <path
      d="M12 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V10M12 3H13.5858C13.851 3 14.1054 3.10536 14.2929 3.29289L18.7071 7.70711C18.8946 7.89464 19 8.149 19 8.41421V10M12 3V8C12 9.10457 12.8954 10 14 10H19"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);
export default SvgComponent;
