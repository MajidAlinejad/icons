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
      d="M2.5 6.5C2.5 4.29086 4.29086 2.5 6.5 2.5H17.5C19.7091 2.5 21.5 4.29086 21.5 6.5V17.5C21.5 19.7091 19.7091 21.5 17.5 21.5H6.5C4.29086 21.5 2.5 19.7091 2.5 17.5V6.5Z"
      stroke="currentColor"
    />
    <path
      d="M2.5 14.4999L5.8055 11.1945C6.68783 10.3122 8.15379 10.4443 8.86406 11.4702L10.7664 14.218C11.4311 15.1781 12.7735 15.3669 13.6773 14.6275L16.0992 12.646C16.8944 11.9954 18.0533 12.0532 18.7798 12.7797L21.5 15.4999"
      stroke="currentColor"
    />
    <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor" />
  </svg>
);
export default SvgComponent;
