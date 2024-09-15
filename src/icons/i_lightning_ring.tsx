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
      d="M11.5 13.8H10.4367C8.90773 13.8 8.14327 13.8 7.85403 13.303C7.56479 12.806 7.94244 12.1413 8.69774 10.812L11.0653 6.64512C11.4403 5.98516 11.6277 5.65517 11.8139 5.70436C12 5.75354 12 6.13307 12 6.89213V9.7C12 9.9357 12 10.0536 12.0732 10.1268C12.1464 10.2 12.2643 10.2 12.5 10.2H13.5633C15.0923 10.2 15.8567 10.2 16.146 10.697C16.4352 11.194 16.0576 11.8587 15.3023 13.188L12.9347 17.3549C12.5597 18.0148 12.3723 18.3448 12.1861 18.2956C12 18.2465 12 17.8669 12 17.1079V14.3C12 14.0643 12 13.9464 11.9268 13.8732C11.8536 13.8 11.7357 13.8 11.5 13.8Z"
      fill="currentColor"
    />
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
  </svg>
);
export default SvgComponent;
