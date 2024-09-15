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
      d="M17.7071 13.7071L20.3552 16.3552C20.7113 16.7113 20.7113 17.2887 20.3552 17.6448C18.43 19.57 15.3821 19.7866 13.204 18.153L11.6286 16.9714C9.88504 15.6638 8.33622 14.115 7.02857 12.3714L5.84701 10.796C4.21341 8.61788 4.43001 5.56999 6.35523 3.64477C6.71133 3.28867 7.28867 3.28867 7.64477 3.64477L10.2929 6.29289C10.6834 6.68342 10.6834 7.31658 10.2929 7.70711L9.27175 8.72825C9.10946 8.89054 9.06923 9.13846 9.17187 9.34373C10.3585 11.7171 12.2829 13.6415 14.6563 14.8281C14.8615 14.9308 15.1095 14.8905 15.2717 14.7283L16.2929 13.7071C16.6834 13.3166 17.3166 13.3166 17.7071 13.7071Z"
      fill="#7E869E"
      fillOpacity="0.25"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.3552 17.6448C20.7113 17.2887 20.7113 16.7113 20.3552 16.3552L17.7071 13.7071C17.707 13.707 17.707 13.707 17.7069 13.7069C17.3163 13.3166 16.6833 13.3166 16.2929 13.7071L15.5 14.5L19.4048 18.4048C19.7429 18.1914 20.0621 17.9379 20.3552 17.6448ZM5.59515 4.59517L9.49997 8.49999L10.2929 7.7071C10.6834 7.31657 10.6834 6.68341 10.2929 6.29288L7.64474 3.64476C7.28864 3.28866 6.7113 3.28866 6.3552 3.64476C6.06208 3.93788 5.80856 4.25703 5.59515 4.59517Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
