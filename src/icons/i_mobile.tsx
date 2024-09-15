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
      d="M6.87868 2.87868C6.36902 3.38834 6.17027 4.01669 6.08214 4.67221C5.9999 5.28387 5.99995 6.04768 6 6.93417C6 6.95604 6 6.97798 6 7V17L6 17.0658C5.99995 17.9523 5.9999 18.7161 6.08214 19.3278C6.17027 19.9833 6.36902 20.6117 6.87868 21.1213C7.38834 21.631 8.01669 21.8297 8.67221 21.9179C9.28387 22.0001 10.0477 22.0001 10.9342 22L11 22H13L13.0658 22C13.9523 22.0001 14.7161 22.0001 15.3278 21.9179C15.9833 21.8297 16.6117 21.631 17.1213 21.1213C17.631 20.6117 17.8297 19.9833 17.9179 19.3278C18.0001 18.7161 18.0001 17.9523 18 17.0658L18 17V7L18 6.93417C18.0001 6.04768 18.0001 5.28387 17.9179 4.67221C17.8297 4.01669 17.631 3.38834 17.1213 2.87868C16.6117 2.36902 15.9833 2.17027 15.3278 2.08214C14.7161 1.9999 13.9523 1.99995 13.0658 2C13.044 2 13.022 2 13 2H11C10.978 2 10.956 2 10.9342 2C10.0477 1.99995 9.28387 1.9999 8.67221 2.08214C8.01669 2.17027 7.38834 2.36902 6.87868 2.87868Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M7 16H17" stroke="currentColor" strokeWidth="2" />
  </svg>
);
export default SvgComponent;
