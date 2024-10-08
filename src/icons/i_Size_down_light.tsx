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
      d="M12 20.5L11.7 20.9L12 21.125L12.3 20.9L12 20.5ZM12.5 9C12.5 8.72386 12.2761 8.5 12 8.5C11.7239 8.5 11.5 8.72386 11.5 9H12.5ZM7.7 17.9L11.7 20.9L12.3 20.1L8.3 17.1L7.7 17.9ZM12.3 20.9L16.3 17.9L15.7 17.1L11.7 20.1L12.3 20.9ZM12.5 20.5V9H11.5V20.5H12.5Z"
      fill="currentColor"
    />
    <path
      d="M8.5 14.5H4.5C3.39543 14.5 2.5 13.6046 2.5 12.5V5.5C2.5 4.39543 3.39543 3.5 4.5 3.5H19.5C20.6046 3.5 21.5 4.39543 21.5 5.5V12.5C21.5 13.6046 20.6046 14.5 19.5 14.5H15.5"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
