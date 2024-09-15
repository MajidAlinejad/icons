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
      d="M19.3259 5.77772C20 6.78661 20 8.19108 20 11C20 13.8089 20 15.2134 19.3259 16.2223C19.034 16.659 18.659 17.034 18.2223 17.3259C17.3409 17.9148 16.1577 17.9892 14 17.9986V18L12.8944 20.2111C12.5259 20.9482 11.4741 20.9482 11.1056 20.2111L10 18V17.9986C7.8423 17.9892 6.65907 17.9148 5.77772 17.3259C5.34096 17.034 4.96596 16.659 4.67412 16.2223C4 15.2134 4 13.8089 4 11C4 8.19108 4 6.78661 4.67412 5.77772C4.96596 5.34096 5.34096 4.96596 5.77772 4.67412C6.78661 4 8.19108 4 11 4H13C15.8089 4 17.2134 4 18.2223 4.67412C18.659 4.96596 19.034 5.34096 19.3259 5.77772Z"
      fill="#7E869E"
      fill-opacity="0.25"
    />
    <path
      d="M19.3259 5.77772L18.827 6.11106L18.827 6.11106L19.3259 5.77772ZM19.3259 16.2223L18.827 15.8889L18.827 15.8889L19.3259 16.2223ZM18.2223 17.3259L17.8889 16.827L17.8889 16.827L18.2223 17.3259ZM14 17.9986L13.9974 17.3986C13.667 17.4001 13.4 17.6683 13.4 17.9986H14ZM14 18L14.5367 18.2683C14.5783 18.185 14.6 18.0931 14.6 18H14ZM10 18H9.4C9.4 18.0931 9.42169 18.185 9.46334 18.2683L10 18ZM10 17.9986H10.6C10.6 17.6683 10.333 17.4001 10.0026 17.3986L10 17.9986ZM5.77772 17.3259L6.11106 16.827L6.11106 16.827L5.77772 17.3259ZM4.67412 16.2223L5.173 15.8889L5.173 15.8889L4.67412 16.2223ZM4.67412 5.77772L5.173 6.11106L4.67412 5.77772ZM5.77772 4.67412L6.11106 5.173L5.77772 4.67412ZM18.2223 4.67412L17.8889 5.173L17.8889 5.173L18.2223 4.67412ZM20.6 11C20.6 9.60803 20.6007 8.51888 20.5127 7.65313C20.4236 6.77734 20.2387 6.06384 19.8248 5.44438L18.827 6.11106C19.0872 6.50049 19.2394 6.99367 19.3188 7.77457C19.3993 8.5655 19.4 9.58305 19.4 11H20.6ZM19.8248 16.5556C20.2387 15.9362 20.4236 15.2227 20.5127 14.3469C20.6007 13.4811 20.6 12.392 20.6 11H19.4C19.4 12.417 19.3993 13.4345 19.3188 14.2254C19.2394 15.0063 19.0872 15.4995 18.827 15.8889L19.8248 16.5556ZM18.5556 17.8248C19.0579 17.4892 19.4892 17.0579 19.8248 16.5556L18.827 15.8889C18.5789 16.2602 18.2602 16.5789 17.8889 16.827L18.5556 17.8248ZM14.0026 18.5986C15.0786 18.5939 15.9514 18.5735 16.6719 18.4739C17.4021 18.373 18.0146 18.1863 18.5556 17.8248L17.8889 16.827C17.5487 17.0544 17.1288 17.1993 16.5076 17.2852C15.8767 17.3724 15.0791 17.3939 13.9974 17.3986L14.0026 18.5986ZM14.6 18V17.9986H13.4V18H14.6ZM13.4311 20.4795L14.5367 18.2683L13.4633 17.7317L12.3578 19.9428L13.4311 20.4795ZM10.5689 20.4795C11.1586 21.6588 12.8414 21.6588 13.4311 20.4795L12.3578 19.9428C12.2104 20.2376 11.7896 20.2376 11.6422 19.9428L10.5689 20.4795ZM9.46334 18.2683L10.5689 20.4795L11.6422 19.9428L10.5367 17.7317L9.46334 18.2683ZM9.4 17.9986V18H10.6V17.9986H9.4ZM5.44438 17.8248C5.98544 18.1863 6.59793 18.373 7.32807 18.4739C8.04857 18.5735 8.92139 18.5939 9.99738 18.5986L10.0026 17.3986C8.92091 17.3939 8.12326 17.3724 7.49239 17.2852C6.87115 17.1993 6.45135 17.0544 6.11106 16.827L5.44438 17.8248ZM4.17524 16.5556C4.51085 17.0579 4.9421 17.4892 5.44438 17.8248L6.11106 16.827C5.73981 16.5789 5.42106 16.2602 5.173 15.8889L4.17524 16.5556ZM3.4 11C3.4 12.392 3.39927 13.4811 3.48735 14.3469C3.57644 15.2227 3.76133 15.9362 4.17524 16.5556L5.173 15.8889C4.9128 15.4995 4.76062 15.0063 4.68118 14.2254C4.60073 13.4345 4.6 12.417 4.6 11H3.4ZM4.17524 5.44438C3.76133 6.06384 3.57644 6.77734 3.48735 7.65313C3.39927 8.51888 3.4 9.60803 3.4 11H4.6C4.6 9.58305 4.60073 8.5655 4.68118 7.77457C4.76062 6.99367 4.9128 6.50049 5.173 6.11106L4.17524 5.44438ZM5.44438 4.17524C4.9421 4.51085 4.51085 4.9421 4.17524 5.44438L5.173 6.11106C5.42106 5.73981 5.73981 5.42106 6.11106 5.173L5.44438 4.17524ZM11 3.4C9.60803 3.4 8.51888 3.39927 7.65313 3.48735C6.77734 3.57644 6.06384 3.76133 5.44438 4.17524L6.11106 5.173C6.50049 4.9128 6.99367 4.76062 7.77457 4.68118C8.5655 4.60073 9.58305 4.6 11 4.6V3.4ZM13 3.4H11V4.6H13V3.4ZM18.5556 4.17524C17.9362 3.76133 17.2227 3.57644 16.3469 3.48735C15.4811 3.39927 14.392 3.4 13 3.4V4.6C14.417 4.6 15.4345 4.60073 16.2254 4.68118C17.0063 4.76062 17.4995 4.9128 17.8889 5.173L18.5556 4.17524ZM19.8248 5.44438C19.4892 4.9421 19.0579 4.51085 18.5556 4.17524L17.8889 5.173C18.2602 5.42106 18.5789 5.73981 18.827 6.11106L19.8248 5.44438Z"
      fill="currentColor"
    />
    <circle
      cx="16"
      cy="11"
      r="1"
      fill="currentColor"
      stroke="currentColor"
      stroke-width="0.2"
      stroke-linecap="round"
    />
    <circle
      cx="12"
      cy="11"
      r="1"
      fill="currentColor"
      stroke="currentColor"
      stroke-width="0.2"
      stroke-linecap="round"
    />
    <circle
      cx="8"
      cy="11"
      r="1"
      fill="currentColor"
      stroke="currentColor"
      stroke-width="0.2"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
