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
      d="M15.7639 15H10.386C9.55231 15 8.80607 14.4829 8.51334 13.7022L6.50667 8.35112C6.26151 7.69737 6.74479 7 7.443 7H18.5729C19.688 7 20.4133 8.17347 19.9146 9.17082L17.5528 13.8944C17.214 14.572 16.5215 15 15.7639 15Z"
      fill="#2A4157"
      fill-opacity="0.24"
    />
    <circle cx="17" cy="20" r="1" fill="currentColor" />
    <circle cx="9" cy="20" r="1" fill="currentColor" />
    <path
      d="M17.5 17.5H8.05091C7.90471 17.5 7.83162 17.5 7.77616 17.4938C7.18857 17.428 6.78605 16.8695 6.90945 16.2913C6.92109 16.2367 6.94421 16.1674 6.99044 16.0287V16.0287C7.04177 15.8747 7.06743 15.7977 7.09579 15.7298C7.38607 15.0342 8.04277 14.5608 8.79448 14.5054C8.8679 14.5 8.94906 14.5 9.11137 14.5H16.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.5 4.5H5.05848C5.7542 4.5 6.10206 4.5 6.36395 4.68876C6.62584 4.87752 6.73584 5.20753 6.95585 5.86754L7.5 7.5"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
