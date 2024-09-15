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
      d="M21 16.6953V5.66466C21 5.34631 20.6785 5.12861 20.3829 5.24685L16.1351 6.94596C16.0473 6.98109 15.9506 6.98765 15.8588 6.96471L8.14116 5.03529C8.04939 5.01235 7.95273 5.01891 7.8649 5.05404L3.28287 6.88685C3.11203 6.95519 3 7.12066 3 7.30466V18.3353C3 18.6537 3.32154 18.8714 3.61713 18.7531L7.8649 17.054C7.95273 17.0189 8.04939 17.0123 8.14117 17.0353L15.8588 18.9647C15.9506 18.9877 16.0473 18.9811 16.1351 18.946L20.7171 17.1131C20.888 17.0448 21 16.8793 21 16.6953Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <path d="M16 19V7" stroke="currentColor" stroke-width="2" />
    <path d="M8 17L8 5" stroke="currentColor" stroke-width="2" />
  </svg>
);
export default SvgComponent;
