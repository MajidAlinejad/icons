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
      d="M12 5L12 3"
      stroke="currentColor"
      stroke-width="2"
      strokeLinecap="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M22 8H2V11C2.37518 11 2.56277 11 2.72757 11.0277C3.41213 11.1429 3.98799 11.6049 4.24896 12.2481C4.31178 12.403 4.35247 12.5861 4.43386 12.9524L4.43386 12.9524L5.30394 16.8677C5.63763 18.3694 5.80448 19.1202 6.35289 19.5601C6.9013 20 7.67043 20 9.20869 20H14.7913C16.3296 20 17.0987 20 17.6471 19.5601C18.1955 19.1202 18.3624 18.3694 18.6961 16.8677L19.5661 12.9524L19.5661 12.9523C19.6475 12.5861 19.6882 12.403 19.751 12.2481C20.012 11.6049 20.5879 11.1429 21.2724 11.0277C21.4372 11 21.6248 11 22 11V8ZM9.48639 12.8356C9.3956 12.2908 8.88037 11.9228 8.3356 12.0136C7.79083 12.1044 7.42281 12.6196 7.51361 13.1644L8.01361 16.1644C8.1044 16.7092 8.61963 17.0772 9.1644 16.9864C9.70917 16.8956 10.0772 16.3804 9.98639 15.8356L9.48639 12.8356ZM16.4863 13.1644C16.5771 12.6196 16.2091 12.1044 15.6643 12.0136C15.1195 11.9228 14.6043 12.2908 14.5135 12.8356L14.0135 15.8356C13.9227 16.3804 14.2907 16.8956 14.8355 16.9864C15.3803 17.0772 15.8955 16.7092 15.9863 16.1644L16.4863 13.1644Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
