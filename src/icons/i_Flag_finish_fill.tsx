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
      d="M6 5.5V13H10.382C10.6827 13 10.833 13 10.9538 13.0747C11.0747 13.1493 11.1419 13.2838 11.2764 13.5528L11.7236 14.4472C11.8581 14.7162 11.9253 14.8507 12.0462 14.9253C12.167 15 12.3173 15 12.618 15H17.5C17.7357 15 17.8536 15 17.9268 14.9268C18 14.8536 18 14.7357 18 14.5V7.5C18 7.2643 18 7.14645 17.9268 7.07322C17.8536 7 17.7357 7 17.5 7H12.618C12.3173 7 12.167 7 12.0462 6.92533C11.9253 6.85065 11.8581 6.71617 11.7236 6.44721L11.2764 5.55279C11.1419 5.28383 11.0747 5.14935 10.9538 5.07467C10.833 5 10.6827 5 10.382 5H6.5C6.2643 5 6.14645 5 6.07322 5.07322C6 5.14645 6 5.2643 6 5.5Z"
      fill="currentColor"
    />
    <path
      d="M6 13V5.5C6 5.2643 6 5.14645 6.07322 5.07322C6.14645 5 6.2643 5 6.5 5H10.382C10.6827 5 10.833 5 10.9538 5.07467C11.0747 5.14935 11.1419 5.28383 11.2764 5.55279L11.7236 6.44721C11.8581 6.71617 11.9253 6.85065 12.0462 6.92533C12.167 7 12.3173 7 12.618 7H17.5C17.7357 7 17.8536 7 17.9268 7.07322C18 7.14645 18 7.2643 18 7.5V14.5C18 14.7357 18 14.8536 17.9268 14.9268C17.8536 15 17.7357 15 17.5 15H12.618C12.3173 15 12.167 15 12.0462 14.9253C11.9253 14.8507 11.8581 14.7162 11.7236 14.4472L11.2764 13.5528C11.1419 13.2838 11.0747 13.1493 10.9538 13.0747C10.833 13 10.6827 13 10.382 13H6ZM6 13V19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
