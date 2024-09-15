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
      d="M22 8L22.7071 7.29289L23.4142 8L22.7071 8.70711L22 8ZM12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7V9ZM18.7071 3.29289L22.7071 7.29289L21.2929 8.70711L17.2929 4.70711L18.7071 3.29289ZM22.7071 8.70711L18.7071 12.7071L17.2929 11.2929L21.2929 7.29289L22.7071 8.70711ZM22 9H12V7H22V9Z"
      fill="currentColor"
    />
    <path
      d="M2 16L1.29289 15.2929L0.585786 16L1.29289 16.7071L2 16ZM21 17C21.5523 17 22 16.5523 22 16C22 15.4477 21.5523 15 21 15L21 17ZM5.29289 11.2929L1.29289 15.2929L2.70711 16.7071L6.70711 12.7071L5.29289 11.2929ZM1.29289 16.7071L5.29289 20.7071L6.70711 19.2929L2.70711 15.2929L1.29289 16.7071ZM2 17L21 17L21 15L2 15L2 17Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
