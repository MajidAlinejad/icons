const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="path-1-outside-1_0_2961"
      maskUnits="userSpaceOnUse"
      x="7"
      y="2"
      width="10"
      height="6"
      fill="black"
    >
      <rect fill="white" x="7" y="2" width="10" height="6" />
      <path d="M13.3333 5H10.6667C10.5117 5 10.4342 5 10.3706 4.98296C10.198 4.93673 10.0633 4.80196 10.017 4.62941C10 4.56583 10 4.48833 10 4.33333C10 4.25584 10 4.21709 10.0085 4.1853C10.0316 4.09902 10.099 4.03164 10.1853 4.00852C10.2171 4 10.2558 4 10.3333 4H13.6667C13.7442 4 13.7829 4 13.8147 4.00852C13.901 4.03164 13.9684 4.09902 13.9915 4.1853C14 4.21709 14 4.25584 14 4.33333C14 4.48833 14 4.56583 13.983 4.62941C13.9367 4.80196 13.802 4.93673 13.6294 4.98296C13.5658 5 13.4883 5 13.3333 5Z" />
    </mask>
    <path
      d="M10.017 4.62941L8.08519 5.14705L8.08519 5.14705L10.017 4.62941ZM10.3706 4.98296L9.85295 6.91481H9.85295L10.3706 4.98296ZM13.983 4.62941L12.0511 4.11177L12.0511 4.11177L13.983 4.62941ZM13.6294 4.98296L14.147 6.91481L14.147 6.91481L13.6294 4.98296ZM13.9915 4.1853L15.9233 3.66766L15.9233 3.66766L13.9915 4.1853ZM13.8147 4.00852L13.2971 5.94037L13.2971 5.94037L13.8147 4.00852ZM10.0085 4.1853L11.9404 4.70293L10.0085 4.1853ZM10.1853 4.00852L10.7029 5.94037L10.1853 4.00852ZM10.6667 7H13.3333V3H10.6667V7ZM13.6667 2H10.3333V6H13.6667V2ZM8 4.33333C8 4.35957 7.98282 4.76502 8.08519 5.14705L11.9489 4.11177C11.9935 4.2782 11.9991 4.40436 12.0001 4.42453C12.0006 4.43631 12.0004 4.43764 12.0002 4.41833C12 4.39894 12 4.37464 12 4.33333H8ZM10.6667 3C10.6254 3 10.6011 2.99998 10.5817 2.99981C10.5624 2.99964 10.5637 2.99941 10.5755 2.99995C10.5956 3.00087 10.7218 3.00652 10.8882 3.05111L9.85295 6.91481C10.235 7.01718 10.6404 7 10.6667 7V3ZM8.08519 5.14705C8.31635 6.00978 8.99022 6.68365 9.85295 6.91481L10.8882 3.05111C11.4059 3.18981 11.8102 3.59413 11.9489 4.11177L8.08519 5.14705ZM12 4.33333C12 4.37464 12 4.39894 11.9998 4.41833C11.9996 4.43764 11.9994 4.43631 11.9999 4.42453C12.0009 4.40436 12.0065 4.2782 12.0511 4.11177L15.9148 5.14705C16.0172 4.76502 16 4.35957 16 4.33333H12ZM13.3333 7C13.3596 7 13.765 7.01718 14.147 6.91481L13.1118 3.05111C13.2782 3.00652 13.4044 3.00087 13.4245 2.99995C13.4363 2.99941 13.4376 2.99964 13.4183 2.99981C13.3989 2.99998 13.3746 3 13.3333 3V7ZM12.0511 4.11177C12.1898 3.59413 12.5941 3.18981 13.1118 3.05111L14.147 6.91481C15.0098 6.68365 15.6836 6.00978 15.9148 5.14705L12.0511 4.11177ZM16 4.33333C16 4.31271 16.0005 4.23053 15.9969 4.15106C15.9927 4.06084 15.9807 3.88178 15.9233 3.66766L12.0596 4.70293C12.0108 4.5206 12.003 4.37681 12.001 4.33329C11.9999 4.30984 11.9999 4.29541 11.9999 4.29969C12 4.30405 12 4.3114 12 4.33333H16ZM13.6667 6C13.6886 6 13.6959 6.00002 13.7003 6.00005C13.7046 6.00009 13.6902 6.00006 13.6667 5.99899C13.6232 5.997 13.4794 5.98923 13.2971 5.94037L14.3323 2.07667C14.1182 2.01929 13.9392 2.00726 13.8489 2.00314C13.7695 1.99952 13.6873 2 13.6667 2V6ZM15.9233 3.66766C15.7153 2.8912 15.1088 2.28472 14.3323 2.07667L13.2971 5.94037C12.6932 5.77855 12.2214 5.30684 12.0596 4.70293L15.9233 3.66766ZM12 4.33333C12 4.3114 12 4.30405 12.0001 4.29969C12.0001 4.29541 12.0001 4.30984 11.999 4.33329C11.997 4.37682 11.9892 4.5206 11.9404 4.70293L8.07667 3.66766C8.01929 3.88178 8.00726 4.06084 8.00314 4.15106C7.99952 4.23053 8 4.31271 8 4.33333H12ZM10.3333 2C10.3127 2 10.2305 1.99952 10.1511 2.00314C10.0608 2.00726 9.88178 2.01929 9.66766 2.07667L10.7029 5.94037C10.5206 5.98923 10.3768 5.997 10.3333 5.99899C10.3098 6.00006 10.2954 6.00009 10.2997 6.00005C10.3041 6.00002 10.3114 6 10.3333 6V2ZM11.9404 4.70293C11.7786 5.30684 11.3068 5.77855 10.7029 5.94037L9.66766 2.07667C8.8912 2.28472 8.28472 2.8912 8.07667 3.66766L11.9404 4.70293Z"
      fill="currentColor"
      mask="url(#path-1-outside-1_0_2961)"
    />
    <rect
      x="6"
      y="3"
      width="12"
      height="18"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="12" cy="18" r="1" fill="currentColor" />
  </svg>
);
export default SvgComponent;
