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
      d="M4 7.41421C4 7.20984 4 7.10765 4.03806 7.01577C4.07612 6.92388 4.14838 6.85162 4.29289 6.70711L5.82843 5.17157C6.40649 4.59351 6.69552 4.30448 7.06306 4.15224C7.4306 4 7.83935 4 8.65685 4H15.3431C16.1606 4 16.5694 4 16.9369 4.15224C17.3045 4.30448 17.5935 4.59351 18.1716 5.17157L19.7071 6.70711C19.8516 6.85162 19.9239 6.92388 19.9619 7.01577C20 7.10765 20 7.20984 20 7.41421V8H4V7.41421Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M21 8H3V17C3 18.8856 3 19.8284 3.58579 20.4142C4.17157 21 5.11438 21 7 21H17C18.8856 21 19.8284 21 20.4142 20.4142C21 19.8284 21 18.8856 21 17V8ZM10 11C10 10.4477 9.55228 10 9 10C8.44772 10 8 10.4477 8 11C8 12.0609 8.42143 13.0783 9.17157 13.8284C9.92172 14.5786 10.9391 15 12 15C13.0609 15 14.0783 14.5786 14.8284 13.8284C15.5786 13.0783 16 12.0609 16 11C16 10.4477 15.5523 10 15 10C14.4477 10 14 10.4477 14 11C14 11.5304 13.7893 12.0391 13.4142 12.4142C13.0391 12.7893 12.5304 13 12 13C11.4696 13 10.9609 12.7893 10.5858 12.4142C10.2107 12.0391 10 11.5304 10 11Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
