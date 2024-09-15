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
      d="M8 4.46105C8 4.03164 8 3.81694 8.06485 3.64576C8.16633 3.37785 8.37785 3.16633 8.64576 3.06485C8.81694 3 9.03164 3 9.46105 3H14.539C14.9684 3 15.1831 3 15.3542 3.06485C15.6222 3.16633 15.8337 3.37785 15.9352 3.64576C16 3.81694 16 4.03164 16 4.46105V4.67946C16 5.56941 16 6.01438 16.0475 6.44837C16.1552 7.43179 16.4443 8.38671 16.9002 9.26468C17.1014 9.65214 17.3483 10.0224 17.8419 10.7629L18.8797 12.3196C19.4257 13.1385 18.9956 14.2511 18.0407 14.4898C14.0746 15.4813 9.92539 15.4813 5.95927 14.4898C5.00445 14.2511 4.57432 13.1385 5.12026 12.3196L6.15809 10.7629C6.65175 10.0224 6.89858 9.65214 7.09978 9.26468C7.55571 8.38671 7.84483 7.43179 7.95249 6.44837C8 6.01438 8 5.56941 8 4.67946V4.46105Z"
      fill="currentColor"
    />
    <path
      d="M12 20L12 13.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path d="M6 20H18" stroke="currentColor" strokeWidth="2" />
  </svg>
);
export default SvgComponent;
