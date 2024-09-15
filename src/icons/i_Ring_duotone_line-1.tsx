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
      d="M12 6.5V6.5C9.94303 6.5 8.15002 7.89994 7.65113 9.8955L6.92289 12.8085C6.65078 13.8969 5.98274 14.8448 5.04923 15.4672V15.4672C4.58513 15.7766 4.80417 16.5 5.36195 16.5H18.6381C19.1958 16.5 19.4149 15.7766 18.9508 15.4672V15.4672C18.0173 14.8448 17.3492 13.8969 17.0771 12.8085L16.3489 9.8955C15.85 7.89994 14.057 6.5 12 6.5V6.5ZM12 6.5V3"
      stroke="#7E869E"
      strokeOpacity="0.25"
      strokeLinecap="round"
    />
    <path
      d="M9.58519 18.647C9.72762 19.1786 10.0415 19.6484 10.4781 19.9834C10.9147 20.3184 11.4497 20.5 12 20.5C12.5503 20.5 13.0853 20.3184 13.5219 19.9834C13.9585 19.6484 14.2724 19.1786 14.4148 18.647"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
