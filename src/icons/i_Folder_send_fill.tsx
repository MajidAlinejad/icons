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
      d="M2 7C2 5.11438 2 4.17157 2.58579 3.58579C3.17157 3 4.11438 3 6 3H7C7.98142 3 8.47214 3 8.89443 3.21115C9.31672 3.42229 9.61115 3.81486 10.2 4.6L12 7H18.8C19.9201 7 20.4802 7 20.908 7.21799C21.2843 7.40973 21.5903 7.71569 21.782 8.09202C22 8.51984 22 9.0799 22 10.2V17.8C22 18.9201 22 19.4802 21.782 19.908C21.5903 20.2843 21.2843 20.5903 20.908 20.782C20.4802 21 19.9201 21 18.8 21H5.2C4.0799 21 3.51984 21 3.09202 20.782C2.71569 20.5903 2.40973 20.2843 2.21799 19.908C2 19.4802 2 18.9201 2 17.8V7ZM16.7071 13.2929L13.7071 10.2929L12.2929 11.7071L13.5858 13H9V15H13.5858L12.2929 16.2929L13.7071 17.7071L16.7071 14.7071L17.4142 14L16.7071 13.2929Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
