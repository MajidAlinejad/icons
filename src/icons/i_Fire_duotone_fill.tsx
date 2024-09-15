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
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.9304 2.53932C11.231 2.94038 5.5 6.42735 5.5 13.0002C5.5 16.4218 8.14378 19.226 11.5 19.4813V14.8662C11.2011 14.6933 11 14.3701 11 14C11 13.4477 11.4477 13 12 13C12.5523 13 13 13.4477 13 14C13 14.3701 12.7989 14.6933 12.5 14.8662V19.4813C15.8562 19.226 18.5 16.4218 18.5 13.0002C18.5 6.42735 12.769 2.94038 12.0696 2.53932C12.0259 2.51424 11.9741 2.51424 11.9304 2.53932Z"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <path d="M12 22L12 19.4999" stroke="currentColor" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.49994 14.0001L8.49997 14.0002L8.5 14.0002C8.50015 15.7633 9.80395 17.2218 11.5 17.4644V14.8662C11.2011 14.6933 11 14.3701 11 14C11 13.4477 11.4477 13 12 13C12.5523 13 13 13.4477 13 14C13 14.3701 12.7989 14.6933 12.5 14.8662V17.4644C14.1961 17.2218 15.5 15.7631 15.5 13.9999L15.4999 13.9742C15.489 9.45534 12.6192 6.98557 12.085 6.56492C12.0346 6.52526 11.9653 6.52522 11.9149 6.56488C11.3799 6.98621 8.49995 9.46462 8.49994 14.0001Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
