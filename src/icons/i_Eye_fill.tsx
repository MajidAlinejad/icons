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
      d="M2.9793 10.2709C4.3646 8.19808 7.26857 5 12 5C16.7315 5 19.6354 8.19808 21.0207 10.2709C21.4856 10.9665 21.718 11.3143 21.6969 11.9569C21.6757 12.5995 21.4089 12.9469 20.8753 13.6417C19.2861 15.7107 16.113 19 12 19C7.88705 19 4.7139 15.7107 3.12477 13.6417C2.59112 12.9469 2.3243 12.5995 2.30314 11.9569C2.28199 11.3143 2.51443 10.9665 2.9793 10.2709ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79087 8 8.00001 9.79086 8.00001 12C8.00001 14.2091 9.79087 16 12 16Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
