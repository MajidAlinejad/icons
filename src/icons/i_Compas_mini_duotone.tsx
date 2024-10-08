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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.7845 14.0777L20.4117 5.94175C20.6915 4.5423 19.4577 3.30846 18.0583 3.58835L9.92233 5.21554C7.54716 5.69057 5.69057 7.54716 5.21554 9.92233L3.58835 18.0583C3.30846 19.4577 4.5423 20.6915 5.94175 20.4117L14.0777 18.7845C16.4528 18.3094 18.3094 16.4528 18.7845 14.0777ZM12 16.9996C14.7614 16.9996 17 14.761 17 11.9996C17 9.23815 14.7614 6.99957 12 6.99957C9.23858 6.99957 7 9.23815 7 11.9996C7 14.761 9.23858 16.9996 12 16.9996Z"
      fill="#7E869E"
      fillOpacity="0.25"
    />
    <circle
      cx="12"
      cy="12"
      r="2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
