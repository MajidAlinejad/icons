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
      d="M21 10V15C21 17.8284 21 19.2426 20.1213 20.1213C19.2426 21 17.8284 21 15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15V10C3 10.9319 3 11.3978 3.15224 11.7654C3.35523 12.2554 3.74458 12.6448 4.23463 12.8478C4.60218 13 5.06812 13 6 13H6.67544C7.25646 13 7.54696 13 7.77888 13.1338C7.83745 13.1675 7.89245 13.2072 7.94303 13.2521C8.14326 13.4298 8.23513 13.7054 8.41886 14.2566L8.54415 14.6325C8.76416 15.2925 8.87416 15.6225 9.13605 15.8112C9.39794 16 9.7458 16 10.4415 16H13.5585C14.2542 16 14.6021 16 14.864 15.8112C15.1258 15.6225 15.2358 15.2925 15.4558 14.6325L15.5811 14.2566L15.5811 14.2566L15.5811 14.2566C15.7649 13.7054 15.8567 13.4298 16.057 13.2521C16.1075 13.2072 16.1625 13.1675 16.2211 13.1338C16.453 13 16.7435 13 17.3246 13H18C18.9319 13 19.3978 13 19.7654 12.8478C20.2554 12.6448 20.6448 12.2554 20.8478 11.7654C21 11.3978 21 10.9319 21 10Z"
      fill="currentColor"
    />
    <path
      d="M3 7C3 5.11438 3 4.17157 3.58579 3.58579C4.17157 3 5.11438 3 7 3H17C18.8856 3 19.8284 3 20.4142 3.58579C21 4.17157 21 5.11438 21 7V17C21 18.8856 21 19.8284 20.4142 20.4142C19.8284 21 18.8856 21 17 21H7C5.11438 21 4.17157 21 3.58579 20.4142C3 19.8284 3 18.8856 3 17V7Z"
      stroke="currentColor"
      stroke-width="2"
    />
  </svg>
);
export default SvgComponent;
