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
      d="M12 18C11.5597 18 11.1318 17.8547 10.7825 17.5867C10.4332 17.3187 10.1821 16.9429 10.0681 16.5176"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
    <path
      d="M10.4243 4.67868C11.0553 3.60606 11.3707 3.06975 11.8223 2.98822C11.9398 2.967 12.0602 2.967 12.1777 2.98822C12.6293 3.06975 12.9447 3.60606 13.5757 4.67868L15.244 7.51482C16.41 9.49693 17.3197 11.619 17.9515 13.8301V13.8301C18.9781 17.4232 16.2801 21 12.5432 21H11.4568C7.71989 21 5.02193 17.4232 6.04854 13.8301V13.8301C6.6803 11.619 7.59004 9.49693 8.75599 7.51482L10.4243 4.67868Z"
      stroke="currentColor"
      stroke-width="2"
    />
  </svg>
);
export default SvgComponent;
