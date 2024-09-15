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
      d="M12 4C17.2537 4 19.4885 7.45014 20.4037 9.81894C20.7417 10.6937 20.9107 11.131 20.6127 11.5655C20.3148 12 19.788 12 18.7344 12H5.26556C4.21197 12 3.68518 12 3.38726 11.5655C3.08933 11.131 3.25832 10.6937 3.59628 9.81894C4.51152 7.45014 6.74632 4 12 4Z"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <circle cx="12" cy="11" r="4" fill="currentColor" />
  </svg>
);
export default SvgComponent;
