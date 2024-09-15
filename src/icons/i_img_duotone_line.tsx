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
      d="M5.8055 11.1945L2.7929 14.207C2.60536 14.3945 2.5 14.6489 2.5 14.9141V17.5C2.5 19.7091 4.29086 21.5 6.5 21.5H17.5C19.7091 21.5 21.5 19.7091 21.5 17.5V15.9141C21.5 15.6489 21.3946 15.3945 21.2071 15.207L18.7798 12.7797C18.0533 12.0532 16.8944 11.9954 16.0992 12.646L13.6773 14.6275C12.7735 15.3669 11.4311 15.1781 10.7664 14.218L8.86406 11.4702C8.15379 10.4443 6.68783 10.3122 5.8055 11.1945Z"
      stroke="currentColor"
    />
    <circle cx="17" cy="6" r="2" fill="#2A4157" fill-opacity="0.24" />
  </svg>
);
export default SvgComponent;
