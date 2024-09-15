const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <ellipse cx="12" cy="7" rx="7" ry="3" fill="#7E869E" fillOpacity="0.25" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 9.99952C15.3357 9.99952 18.1265 8.99957 18.8293 7.66094C18.8407 7.63914 18.8909 7.65418 18.8868 7.67846L17.1124 18.3249C17.04 18.7593 16.8098 19.1517 16.466 19.4267C13.855 21.5155 10.145 21.5155 7.53401 19.4267C7.19015 19.1517 6.95995 18.7593 6.88756 18.3249L5.11315 7.67846C5.1091 7.65417 5.15923 7.63913 5.17068 7.66094C5.8735 8.99957 8.66427 9.99952 12 9.99952Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
