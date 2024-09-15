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
      d="M12 5L11.5757 4.57574L12 4.15147L12.4243 4.57574L12 5ZM12.6 14C12.6 14.3314 12.3314 14.6 12 14.6C11.6686 14.6 11.4 14.3314 11.4 14L12.6 14ZM6.57574 9.57574L11.5757 4.57574L12.4243 5.42426L7.42426 10.4243L6.57574 9.57574ZM12.4243 4.57574L17.4243 9.57574L16.5757 10.4243L11.5757 5.42426L12.4243 4.57574ZM12.6 5L12.6 14L11.4 14L11.4 5L12.6 5Z"
      fill="currentColor"
    />
    <path
      d="M5 16L5 17C5 18.1046 5.89543 19 7 19L17 19C18.1046 19 19 18.1046 19 17V16"
      stroke="#2A4157"
      stroke-opacity="0.24"
      stroke-width="1.2"
    />
  </svg>
);
export default SvgComponent;
