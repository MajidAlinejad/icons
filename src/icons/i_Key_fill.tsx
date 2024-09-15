const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx="8"
      cy="15"
      r="3"
      fill="currentColor"
      stroke="currentColor"
      stroke-width="2"
    />
    <path
      d="M18.2071 6.20711C18.5976 5.81658 18.5976 5.18342 18.2071 4.79289C17.8166 4.40237 17.1834 4.40237 16.7929 4.79289L18.2071 6.20711ZM18.2929 9.70711L19 10.4142L20.4142 9L19.7071 8.29289L18.2929 9.70711ZM16.2929 9.70711L17 10.4142L18.4142 9L17.7071 8.29289L16.2929 9.70711ZM9.29289 12.2929C8.90237 12.6834 8.90237 13.3166 9.29289 13.7071C9.68342 14.0976 10.3166 14.0976 10.7071 13.7071L9.29289 12.2929ZM15.7929 11.2071L16.5 11.9142L17.9142 10.5L17.2071 9.79289L15.7929 11.2071ZM17.2071 7.20711L18.2071 6.20711L16.7929 4.79289L15.7929 5.79289L17.2071 7.20711ZM15.7929 7.20711L18.2929 9.70711L19.7071 8.29289L17.2071 5.79289L15.7929 7.20711ZM16.2071 8.20711L17.2071 7.20711L15.7929 5.79289L14.7929 6.79289L16.2071 8.20711ZM14.7929 8.20711L16.2929 9.70711L17.7071 8.29289L16.2071 6.79289L14.7929 8.20711ZM10.7071 13.7071L15.2071 9.20711L13.7929 7.79289L9.29289 12.2929L10.7071 13.7071ZM15.2071 9.20711L16.2071 8.20711L14.7929 6.79289L13.7929 7.79289L15.2071 9.20711ZM13.7929 9.20711L15.7929 11.2071L17.2071 9.79289L15.2071 7.79289L13.7929 9.20711Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
