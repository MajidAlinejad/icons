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
      strokeOpacity="0.24"
      strokeLinecap="round"
    />
    <path
      d="M8.5 5.5H10.882C11.1827 5.5 11.333 5.5 11.4538 5.57467C11.5747 5.64935 11.6419 5.78383 11.7764 6.05279L12.2236 6.94721C12.3581 7.21617 12.4253 7.35065 12.5462 7.42533C12.667 7.5 12.8173 7.5 13.118 7.5H17C17.2357 7.5 17.3536 7.5 17.4268 7.57322C17.5 7.64645 17.5 7.7643 17.5 8V15C17.5 15.2357 17.5 15.3536 17.4268 15.4268C17.3536 15.5 17.2357 15.5 17 15.5H13.118C12.8173 15.5 12.667 15.5 12.5462 15.4253C12.4253 15.3507 12.3581 15.2162 12.2236 14.9472L11.7764 14.0528C11.6419 13.7838 11.5747 13.6493 11.4538 13.5747C11.333 13.5 11.1827 13.5 10.882 13.5H8.5"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
