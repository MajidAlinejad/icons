const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="9" cy="9" r="4" fill="currentColor" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.864 18.8128C14.8851 18.9183 14.9742 19 15.0819 19H16.8672C17.4687 19 17.9213 18.471 17.7202 17.9042C17.3002 16.7199 16.2951 15 14 15C13.8744 15 13.7527 15.0052 13.6347 15.0151C13.2591 15.0467 13.1629 15.5087 13.415 15.7889C14.3198 16.7941 14.6998 17.9918 14.864 18.8128ZM13.5276 17.8332C13.7713 18.4159 13.2918 19 12.6602 19H11.1328C10.5313 19 10.0787 18.4711 10.2798 17.9042C10.4699 17.3683 10.7798 16.7226 11.2749 16.1763C11.5534 15.869 12.022 15.8468 12.3326 16.1214C12.9049 16.6274 13.2808 17.2429 13.5276 17.8332Z"
      fill="currentColor"
    />
    <path
      d="M9 15C12.5715 15 13.5919 17.5512 13.8834 19.0089C13.9917 19.5504 13.5523 20 13 20H5C4.44772 20 4.00829 19.5504 4.11659 19.0089C4.4081 17.5512 5.42846 15 9 15Z"
      fill="currentColor"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.4821 12.5882C13.4183 11.6795 14 10.4077 14 9C14 8.29933 13.8559 7.63233 13.5957 7.02702C13.7279 7.0092 13.8629 7 14 7C15.6569 7 17 8.34315 17 10C17 11.6569 15.6569 13 14 13C13.4462 13 12.9274 12.8499 12.4821 12.5882ZM11.7119 11.9404C12.5039 11.2095 13 10.1627 13 9C13 8.40307 12.8692 7.83668 12.6348 7.32791C11.6643 7.82475 11 8.8348 11 10C11 10.7399 11.2679 11.4173 11.7119 11.9404Z"
      fill="currentColor"
    />
    <path
      d="M19 3V7"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M21 5L17 5"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
