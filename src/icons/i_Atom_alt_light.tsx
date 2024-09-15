const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="1.5" stroke="currentColor" />
    <path
      d="M16.5 12C16.5 14.7006 15.9516 17.1209 15.0883 18.8475C14.2101 20.604 13.0893 21.5 12 21.5C10.9107 21.5 9.78993 20.604 8.91168 18.8475C8.04839 17.1209 7.5 14.7006 7.5 12C7.5 9.29937 8.04839 6.87912 8.91168 5.15254C9.78993 3.39605 10.9107 2.5 12 2.5C13.0893 2.5 14.2101 3.39605 15.0883 5.15254C15.9516 6.87912 16.5 9.29937 16.5 12Z"
      stroke="currentColor"
    />
    <path
      d="M12 16.5C9.29937 16.5 6.87912 15.9516 5.15254 15.0883C3.39605 14.2101 2.5 13.0893 2.5 12C2.5 10.9107 3.39605 9.78993 5.15254 8.91168C6.87912 8.04839 9.29937 7.5 12 7.5C14.7006 7.5 17.1209 8.04839 18.8475 8.91168C20.604 9.78993 21.5 10.9107 21.5 12C21.5 13.0893 20.604 14.2101 18.8475 15.0883C17.1209 15.9516 14.7006 16.5 12 16.5Z"
      stroke="currentColor"
    />
  </svg>
);
export default SvgComponent;
