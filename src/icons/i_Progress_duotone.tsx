const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="10" fill="#7E869E" fillOpacity="0.25" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.5 7C11.5 7.27614 11.7239 7.5 12 7.5C12.2761 7.5 12.5 7.27614 12.5 7V4C12.5 3.72386 12.2761 3.5 12 3.5C11.7239 3.5 11.5 3.72386 11.5 4V7ZM11.5 20C11.5 20.2761 11.7239 20.5 12 20.5C12.2761 20.5 12.5 20.2761 12.5 20V18C12.5 17.7239 12.2761 17.5 12 17.5C11.7239 17.5 11.5 17.7239 11.5 18V20ZM17.5 12C17.5 11.7239 17.7239 11.5 18 11.5H20C20.2761 11.5 20.5 11.7239 20.5 12C20.5 12.2761 20.2761 12.5 20 12.5H18C17.7239 12.5 17.5 12.2761 17.5 12ZM4 11.5C3.72386 11.5 3.5 11.7239 3.5 12C3.5 12.2761 3.72386 12.5 4 12.5H7C7.27614 12.5 7.5 12.2761 7.5 12C7.5 11.7239 7.27614 11.5 7 11.5H4ZM16.5859 7.41402C16.3906 7.21876 16.3906 6.90217 16.5859 6.70691L17.293 5.9998C17.4883 5.80454 17.8048 5.80454 18.0001 5.9998C18.1954 6.19507 18.1954 6.51165 18.0001 6.70691L17.293 7.41402C17.0977 7.60928 16.7812 7.60928 16.5859 7.41402ZM5.98965 17.3032C5.79438 17.4984 5.79438 17.815 5.98965 18.0103C6.18491 18.2055 6.50149 18.2055 6.69675 18.0103L8.11097 16.596C8.30623 16.4008 8.30623 16.0842 8.11097 15.8889C7.9157 15.6937 7.59912 15.6937 7.40386 15.8889L5.98965 17.3032ZM15.8891 15.8894C16.0844 15.6941 16.401 15.6941 16.5962 15.8894L18.0104 17.3036C18.2057 17.4989 18.2057 17.8154 18.0104 18.0107C17.8152 18.206 17.4986 18.206 17.3033 18.0107L15.8891 16.5965C15.6938 16.4012 15.6938 16.0846 15.8891 15.8894ZM6.69672 5.98989C6.50146 5.79463 6.18488 5.79463 5.98962 5.98989C5.79435 6.18515 5.79435 6.50173 5.98962 6.697L8.11094 8.81832C8.3062 9.01358 8.62278 9.01358 8.81804 8.81832C9.0133 8.62305 9.0133 8.30647 8.81804 8.11121L6.69672 5.98989Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgComponent;
