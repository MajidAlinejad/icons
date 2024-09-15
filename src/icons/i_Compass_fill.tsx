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
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM14.5981 10.4999C14.0241 9.50566 11.0229 7.85497 9.66659 7.14526C9.35019 6.97969 8.97741 7.19492 8.96259 7.55171C8.89909 9.08112 8.82799 12.5057 9.40199 13.4999C9.976 14.4941 12.9773 16.1448 14.3335 16.8545C14.6499 17.02 15.0227 16.8048 15.0375 16.448C15.101 14.9186 15.1721 11.4941 14.5981 10.4999Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
