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
      d="M5.96532 15.1698C5.41322 15.3177 5.13717 15.3917 5.04752 15.6344C4.95786 15.8772 5.10655 16.0938 5.40392 16.5272C5.72066 16.9887 6.08648 17.4179 6.49669 17.8067C7.61888 18.8704 9.02525 19.586 10.5457 19.8671C12.066 20.1482 13.6353 19.9827 15.0636 19.3905C16.4919 18.7984 17.718 17.8051 18.5936 16.5308C19.4692 15.2564 19.9568 13.7557 19.9973 12.21C20.0378 10.6644 19.6295 9.14014 18.8219 7.82167C18.0143 6.5032 16.8419 5.44702 15.4466 4.7809C14.5555 4.35552 13.598 4.10085 12.623 4.02469C12.099 3.98376 11.837 3.96329 11.6716 4.16232C11.5062 4.36135 11.5801 4.63742 11.7281 5.18956L13.3712 11.3219L13.3738 11.3313C13.3862 11.3763 13.4279 11.5281 13.4473 11.6788C13.474 11.8861 13.4907 12.2937 13.2452 12.7188C12.9998 13.1439 12.6385 13.3333 12.4456 13.4138C12.3054 13.4724 12.1531 13.5121 12.1079 13.5239L12.0984 13.5264L5.96532 15.1698Z"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <path
      d="M9.67063 3.30667C9.54649 2.84338 9.48442 2.61174 9.28694 2.51053C9.08946 2.40932 8.87978 2.48868 8.46042 2.64739C7.54796 2.99272 6.68924 3.47037 5.91239 4.06647C4.87054 4.8659 3.99636 5.86272 3.33975 7C2.68314 8.13728 2.25696 9.39275 2.08555 10.6947C1.95774 11.6656 1.97344 12.6481 2.13061 13.6109C2.20284 14.0535 2.23896 14.2747 2.42535 14.3952C2.61174 14.5156 2.84338 14.4535 3.30667 14.3294L11.0341 12.2588C11.4894 12.1368 11.7171 12.0758 11.8206 11.8964C11.9242 11.7171 11.8632 11.4894 11.7412 11.0341L9.67063 3.30667Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
