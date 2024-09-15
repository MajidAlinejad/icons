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
      d="M6 7C6 5.11438 6 4.17157 6.58579 3.58579C7.17157 3 8.11438 3 10 3H14C15.8856 3 16.8284 3 17.4142 3.58579C18 4.17157 18 5.11438 18 7V10H14.8284C14.5632 10 14.3089 9.89464 14.1213 9.70711L12.2929 7.87868C11.7303 7.31607 10.9672 7 10.1716 7L6 7ZM6 9C5.06812 9 4.60218 9 4.23463 9.15224C3.74458 9.35523 3.35523 9.74458 3.15224 10.2346C3 10.6022 3 11.0681 3 12V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.0799 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V15.2C21 14.0799 21 13.5198 20.782 13.092C20.5903 12.7157 20.2843 12.4097 19.908 12.218C19.5064 12.0134 18.9883 12.0008 18 12.0001V12H14.8284C14.0328 12 13.2697 11.6839 12.7071 11.1213L10.8787 9.29289C10.6911 9.10536 10.4368 9 10.1716 9H6Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
