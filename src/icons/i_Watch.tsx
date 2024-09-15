const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="6" stroke="currentColor" stroke-width="2" />
    <path
      d="M8.5 7L8.90693 3.74457C8.9601 3.31921 9.32169 3 9.75036 3H14.2496C14.6783 3 15.0399 3.31921 15.0931 3.74457L15.5 7"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.5 17L8.90693 20.2554C8.9601 20.6808 9.32169 21 9.75036 21H14.2496C14.6783 21 15.0399 20.6808 15.0931 20.2554L15.5 17"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.15 11H17.5V13H18.15C18.6194 13 19 12.6194 19 12.15V11.85C19 11.3806 18.6194 11 18.15 11Z"
      fill="currentColor"
    />
    <path
      d="M12 12L11 9"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M12 12L14.5 13.0004"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
