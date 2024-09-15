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
      d="M4 12C4 9.19974 4 7.79961 4.54497 6.73005C5.02433 5.78924 5.78924 5.02433 6.73005 4.54497C7.79961 4 9.19974 4 12 4C14.8003 4 16.2004 4 17.27 4.54497C18.2108 5.02433 18.9757 5.78924 19.455 6.73005C20 7.79961 20 9.19974 20 12V18C20 18.9428 20 19.4142 19.7071 19.7071C19.4142 20 18.9428 20 18 20H12C9.19974 20 7.79961 20 6.73005 19.455C5.78924 18.9757 5.02433 18.2108 4.54497 17.27C4 16.2004 4 14.8003 4 12Z"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <path d="M12 9V15" stroke="currentColor" stroke-linecap="round" />
    <path d="M9 12H15" stroke="currentColor" stroke-linecap="round" />
  </svg>
);
export default SvgComponent;
