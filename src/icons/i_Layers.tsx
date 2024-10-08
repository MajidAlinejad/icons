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
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.02545 10.044L4.60608 11.0809C4.2384 11.2385 4 11.6 4 12C4 12.4001 4.2384 12.7616 4.60608 12.9192L11.6061 15.9192C11.8576 16.027 12.1424 16.027 12.3939 15.9192L19.3939 12.9192C19.7616 12.7616 20 12.4001 20 12C20 11.6 19.7616 11.2385 19.3939 11.0809L16.9746 10.044L14.436 11.132L16.4614 12L12 13.9121L7.53859 12L9.56404 11.132L7.02545 10.044Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.02545 15.044L4.60608 16.0809C4.2384 16.2385 4 16.6 4 17C4 17.4001 4.2384 17.7616 4.60608 17.9192L11.6061 20.9192C11.8576 21.027 12.1424 21.027 12.3939 20.9192L19.3939 17.9192C19.7616 17.7616 20 17.4001 20 17C20 16.6 19.7616 16.2385 19.3939 16.0809L16.9746 15.044L14.436 16.132L16.4614 17L12 18.9121L7.53859 17L9.56404 16.132L7.02545 15.044Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
