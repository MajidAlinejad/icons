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
      d="M12 4L5 7L12 10L19 7L12 4Z"
      stroke="currentColor"
      strokeLinejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.66009 10.316L4.80304 11.5404C4.6192 11.6192 4.5 11.8 4.5 12C4.5 12.2 4.6192 12.3808 4.80304 12.4596L11.803 15.4596C11.9288 15.5135 12.0712 15.5135 12.197 15.4596L19.197 12.4596C19.3808 12.3808 19.5 12.2 19.5 12C19.5 11.8 19.3808 11.6192 19.197 11.5404L16.3399 10.316L15.0706 10.86L17.7307 12L12 14.456L6.2693 12L8.92939 10.86L7.66009 10.316Z"
      fill="currentColor"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.66009 15.316L4.80304 16.5404C4.6192 16.6192 4.5 16.8 4.5 17C4.5 17.2 4.6192 17.3808 4.80304 17.4596L11.803 20.4596C11.9288 20.5135 12.0712 20.5135 12.197 20.4596L19.197 17.4596C19.3808 17.3808 19.5 17.2 19.5 17C19.5 16.8 19.3808 16.6192 19.197 16.5404L16.3399 15.316L15.0706 15.86L17.7307 17L12 19.456L6.2693 17L8.92939 15.86L7.66009 15.316Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
