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
      d="M12 12L17.6384 15.9035C18.178 16.2771 18.5 16.8916 18.5 17.5479V20C18.5 20.2761 18.2761 20.5 18 20.5H6C5.72386 20.5 5.5 20.2761 5.5 20V17.5479C5.5 16.8916 5.82198 16.2771 6.36158 15.9035L12 12ZM12 12L17.6384 8.09648C18.178 7.72291 18.5 7.10838 18.5 6.45209V4C18.5 3.72386 18.2761 3.5 18 3.5H6C5.72386 3.5 5.5 3.72386 5.5 4V6.45209C5.5 7.10838 5.82198 7.72291 6.36158 8.09648L12 12Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.5 20.5V19.3705C15.5 18.8322 15.2116 18.3352 14.7442 18.0681L12.0744 16.5425C12.0283 16.5162 11.9717 16.5162 11.9256 16.5425L9.25579 18.0681C8.78843 18.3352 8.5 18.8322 8.5 19.3705V20.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgComponent;
