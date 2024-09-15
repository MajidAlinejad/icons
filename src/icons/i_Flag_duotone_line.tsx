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
      d="M6.5 4.5V19.5"
      stroke="#2A4157"
      stroke-opacity="0.24"
      stroke-linecap="round"
    />
    <path
      d="M8.5 5.5H11.882C12.1827 5.5 12.333 5.5 12.4538 5.57467C12.5747 5.64935 12.6419 5.78383 12.7764 6.05279L13.2236 6.94721C13.3581 7.21617 13.4253 7.35065 13.5462 7.42533C13.667 7.5 13.8173 7.5 14.118 7.5H18.691C19.0536 7.5 19.2349 7.5 19.3082 7.61857C19.3814 7.73713 19.3004 7.89929 19.1382 8.22361L17.6118 11.2764C17.5569 11.3861 17.5295 11.441 17.5295 11.5C17.5295 11.559 17.5569 11.6139 17.6118 11.7236L19.1382 14.7764C19.3004 15.1007 19.3814 15.2629 19.3082 15.3814C19.2349 15.5 19.0536 15.5 18.691 15.5H14.118C13.8173 15.5 13.667 15.5 13.5462 15.4253C13.4253 15.3507 13.3581 15.2162 13.2236 14.9472L12.7764 14.0528C12.6419 13.7838 12.5747 13.6493 12.4538 13.5747C12.333 13.5 12.1827 13.5 11.882 13.5H8.5"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
