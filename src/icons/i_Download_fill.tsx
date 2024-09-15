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
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.5 10.6693V13.0005C14.5 14.3812 13.3807 15.5005 12 15.5005C10.6193 15.5005 9.5 14.3812 9.5 13.0005V10.6693C8.5939 11.1934 7.86755 11.9938 7.43606 12.9552C7.27282 13.3189 7.19121 13.5007 7.13328 13.5818C6.95652 13.8291 6.81502 13.9207 6.51699 13.9807C6.41931 14.0004 6.27954 14.0004 6 14.0004C4.34315 14.0004 3 15.3435 3 17.0004C3 18.6572 4.34315 20.0004 6 20.0004H12H18C19.6569 20.0004 21 18.6572 21 17.0004C21 15.3435 19.6569 14.0004 18 14.0004C17.7205 14.0004 17.5807 14.0004 17.483 13.9807C17.185 13.9207 17.0435 13.8291 16.8667 13.5818C16.8088 13.5007 16.7272 13.3189 16.5639 12.9552C16.1325 11.9938 15.4061 11.1934 14.5 10.6693Z"
      fill="currentColor"
    />
    <path
      d="M12 3L11.2929 2.29289L12 1.58579L12.7071 2.29289L12 3ZM13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13L13 13ZM7.29289 6.29289L11.2929 2.29289L12.7071 3.70711L8.70711 7.70711L7.29289 6.29289ZM12.7071 2.29289L16.7071 6.29289L15.2929 7.70711L11.2929 3.70711L12.7071 2.29289ZM13 3L13 13L11 13L11 3L13 3Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
