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
      d="M3 11V11C3 11.9319 3 12.3978 3.15224 12.7654C3.35523 13.2554 3.74458 13.6448 4.23463 13.8478C4.60218 14 5.06812 14 6 14H6.67544C7.25646 14 7.54696 14 7.77888 14.1338C7.83745 14.1675 7.89245 14.2072 7.94303 14.2521C8.14326 14.4298 8.23513 14.7054 8.41886 15.2566L8.54415 15.6325C8.76416 16.2925 8.87416 16.6225 9.13605 16.8112C9.39794 17 9.7458 17 10.4415 17H13.5585C14.2542 17 14.6021 17 14.864 16.8112C15.1258 16.6225 15.2358 16.2925 15.4558 15.6325L15.5811 15.2566C15.7649 14.7054 15.8567 14.4298 16.057 14.2521C16.1075 14.2072 16.1625 14.1675 16.2211 14.1338C16.453 14 16.7435 14 17.3246 14H18C18.9319 14 19.3978 14 19.7654 13.8478C20.2554 13.6448 20.6448 13.2554 20.8478 12.7654C21 12.3978 21 11.9319 21 11V11"
      stroke="currentColor"
    />
    <path d="M8 9L12 12M12 12L16 9M12 12L12 2" stroke="currentColor" />
    <path
      d="M16 5H17C18.8856 5 19.8284 5 20.4142 5.58579C21 6.17157 21 7.11438 21 9V17C21 18.8856 21 19.8284 20.4142 20.4142C19.8284 21 18.8856 21 17 21H7C5.11438 21 4.17157 21 3.58579 20.4142C3 19.8284 3 18.8856 3 17V9C3 7.11438 3 6.17157 3.58579 5.58579C4.17157 5 5.11438 5 7 5H8"
      stroke="currentColor"
    />
  </svg>
);
export default SvgComponent;
