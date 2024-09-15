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
      d="M2.0186 7.49541C2 8.22358 2 9.05225 2 10V12H10.0971C9.76426 11.8433 9.40022 11.74 9.01534 11.7015L7 11.5H6.99999C5.68663 11.3687 5.02995 11.303 4.49718 11.087C3.36574 10.6283 2.50574 9.67803 2.1619 8.50656C2.0787 8.22308 2.03826 7.91099 2.0186 7.49541ZM21.8742 5.77457L21.5 17C20.5396 17 19.6185 16.6185 18.9393 15.9393L17.8123 14.8123C17.4423 14.4423 17.2572 14.2572 17.0697 14.1385C16.4165 13.7251 15.5835 13.7251 14.9303 14.1385C14.7428 14.2572 14.5577 14.4423 14.1877 14.8123L13.4145 15.5855C12.8925 16.1075 12 15.7378 12 14.9996V22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14V10C22 8.20744 22 6.8409 21.8742 5.77457Z"
      fill="currentColor"
    />
    <path
      d="M3 10C3 8.08611 3.00212 6.75129 3.13753 5.74416C3.26907 4.76579 3.50966 4.2477 3.87868 3.87868C4.2477 3.50966 4.76579 3.26907 5.74416 3.13753C6.75129 3.00212 8.08611 3 10 3H14C15.9139 3 17.2487 3.00212 18.2558 3.13753C19.2342 3.26907 19.7523 3.50966 20.1213 3.87868L20.8112 3.18882L20.1213 3.87868C20.4903 4.2477 20.7309 4.76579 20.8625 5.74416C20.9979 6.75129 21 8.08611 21 10V14C21 15.9139 20.9979 17.2487 20.8625 18.2558C20.7309 19.2342 20.4903 19.7523 20.1213 20.1213C19.7523 20.4903 19.2342 20.7309 18.2558 20.8625C17.2487 20.9979 15.9139 21 14 21H13V14C13 13.9818 13 13.9637 13 13.9456C13.0001 13.5215 13.0002 13.1094 12.9545 12.7695C12.903 12.3863 12.7774 11.949 12.4142 11.5858C12.051 11.2226 11.6137 11.097 11.2305 11.0455C10.8906 10.9998 10.4785 10.9999 10.0544 11C10.0363 11 10.0182 11 10 11H3V10Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="16" cy="8" r="2" fill="currentColor" />
    <path
      d="M8 16V15H9V16H8ZM3.62469 20.7809C3.19343 21.1259 2.56414 21.056 2.21913 20.6247C1.87412 20.1934 1.94404 19.5641 2.37531 19.2191L3.62469 20.7809ZM7 21V16H9V21H7ZM8 17H3V15H8V17ZM8.6247 16.7809L3.62469 20.7809L2.37531 19.2191L7.3753 15.2191L8.6247 16.7809Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
