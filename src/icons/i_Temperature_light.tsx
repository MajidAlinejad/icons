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
      d="M15.3839 12.319L15.0454 12.687L15.3839 12.319ZM9.5 6C9.5 4.61929 10.6193 3.5 12 3.5V2.5C10.067 2.5 8.5 4.067 8.5 6H9.5ZM9.5 11.5001V6H8.5V11.5001H9.5ZM7.5 16C7.5 14.6893 8.05969 13.5101 8.95461 12.687L8.27764 11.951C7.1855 12.9555 6.5 14.3981 6.5 16H7.5ZM12 20.5C9.51472 20.5 7.5 18.4853 7.5 16H6.5C6.5 19.0376 8.96243 21.5 12 21.5V20.5ZM16.5 16C16.5 18.4853 14.4853 20.5 12 20.5V21.5C15.0376 21.5 17.5 19.0376 17.5 16H16.5ZM15.0454 12.687C15.9403 13.5101 16.5 14.6893 16.5 16H17.5C17.5 14.3981 16.8145 12.9555 15.7224 11.951L15.0454 12.687ZM14.5 6V11.5001H15.5V6H14.5ZM12 3.5C13.3807 3.5 14.5 4.61929 14.5 6H15.5C15.5 4.067 13.933 2.5 12 2.5V3.5ZM15.7224 11.951C15.5736 11.8141 15.5 11.6494 15.5 11.5001H14.5C14.5 11.9798 14.7312 12.3981 15.0454 12.687L15.7224 11.951ZM8.5 11.5001C8.5 11.6494 8.42644 11.8141 8.27764 11.951L8.95461 12.687C9.26876 12.3981 9.5 11.9798 9.5 11.5001H8.5Z"
      fill="currentColor"
    />
    <circle cx="12" cy="16" r="2.5" stroke="currentColor" />
  </svg>
);
export default SvgComponent;
