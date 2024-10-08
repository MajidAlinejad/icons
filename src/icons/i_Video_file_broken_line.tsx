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
      stroke="currentColor"
    />
    <path
      d="M12.5 3.5H7.5C6.39543 3.5 5.5 4.39543 5.5 5.5V8.5M12.5 3.5H13.0858C13.351 3.5 13.6054 3.60536 13.7929 3.79289L18.2071 8.20711C18.3946 8.39464 18.5 8.649 18.5 8.91421V9.5M12.5 3.5V7.5C12.5 8.60457 13.3954 9.5 14.5 9.5H18.5M18.5 9.5V18.5C18.5 19.6046 17.6046 20.5 16.5 20.5H7.5C6.39543 20.5 5.5 19.6046 5.5 18.5V11.5"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
