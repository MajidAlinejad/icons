const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="5"
      width="18"
      height="14"
      rx="1.5"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M7 9V8H6V9H7ZM10.2929 13.7071C10.6834 14.0976 11.3166 14.0976 11.7071 13.7071C12.0976 13.3166 12.0976 12.6834 11.7071 12.2929L10.2929 13.7071ZM8 13V9H6V13H8ZM7 10H11V8H7V10ZM6.29289 9.70711L10.2929 13.7071L11.7071 12.2929L7.70711 8.29289L6.29289 9.70711Z"
      fill="currentColor"
    />
    <path
      d="M17 15V16H18V15H17ZM13.7071 10.2929C13.3166 9.90237 12.6834 9.90237 12.2929 10.2929C11.9024 10.6834 11.9024 11.3166 12.2929 11.7071L13.7071 10.2929ZM16 11V15H18V11H16ZM17 14H13V16H17V14ZM17.7071 14.2929L13.7071 10.2929L12.2929 11.7071L16.2929 15.7071L17.7071 14.2929Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
