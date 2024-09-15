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
      d="M12 14L11.5757 14.4243L12 14.8485L12.4243 14.4243L12 14ZM12.6 5C12.6 4.66863 12.3314 4.4 12 4.4C11.6686 4.4 11.4 4.66863 11.4 5L12.6 5ZM6.57574 9.42426L11.5757 14.4243L12.4243 13.5757L7.42426 8.57574L6.57574 9.42426ZM12.4243 14.4243L17.4243 9.42426L16.5757 8.57574L11.5757 13.5757L12.4243 14.4243ZM12.6 14L12.6 5L11.4 5L11.4 14L12.6 14Z"
      fill="currentColor"
    />
    <path
      d="M5 16L5 17C5 18.1046 5.89543 19 7 19L17 19C18.1046 19 19 18.1046 19 17V16"
      stroke="#2A4157"
      stroke-opacity="0.24"
      strokeWidth="1.2"
    />
  </svg>
);
export default SvgComponent;
