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
      d="M18.712 4.78862L12.7878 2.24968C12.2847 2.03406 11.7153 2.03406 11.2122 2.24968L5.28797 4.78862C4.47806 5.13572 3.99073 5.972 4.08804 6.84777L4.73939 12.7099C4.93906 14.5069 5.8263 16.157 7.21529 17.3144L10.7196 20.2347C11.4613 20.8528 12.5387 20.8528 13.2804 20.2347L16.7847 17.3144C18.1737 16.157 19.0609 14.5069 19.2606 12.7099L19.912 6.84777C20.0093 5.972 19.5219 5.13572 18.712 4.78862Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgComponent;
