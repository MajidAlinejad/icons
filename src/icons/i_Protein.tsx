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
      d="M9.29937 5.68122C10.6377 3.85696 13.3623 3.85696 14.7006 5.68122L15.4675 6.72652C17.127 8.98854 18.1662 11.6451 18.4823 14.4327V14.4327C18.781 17.0685 17.1309 19.534 14.5803 20.2628L13.8118 20.4824C12.6276 20.8207 11.3724 20.8207 10.1882 20.4824L9.41969 20.2628C6.86912 19.534 5.21896 17.0685 5.51775 14.4327V14.4327C5.83375 11.6451 6.87303 8.98854 8.53251 6.72652L9.29937 5.68122Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);
export default SvgComponent;
