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
      d="M3 9.8541C3 8.83011 3.83011 8 4.8541 8V8C5.55638 8 6.19839 7.60322 6.51246 6.97508L7.33333 5.33333C7.44329 5.11342 7.49827 5.00346 7.56062 4.90782C7.8859 4.40882 8.41668 4.08078 9.00848 4.01299C9.1219 4 9.24484 4 9.49071 4H14.5093C14.7552 4 14.8781 4 14.9915 4.01299C15.5833 4.08078 16.1141 4.40882 16.4394 4.90782C16.5017 5.00346 16.5567 5.11342 16.6667 5.33333L17.4875 6.97508C17.8016 7.60322 18.4436 8 19.1459 8V8C20.1699 8 21 8.83011 21 9.8541V14.8571C21 16.8619 21 17.8643 20.5402 18.5961C20.3004 18.9777 19.9777 19.3004 19.5961 19.5402C18.8643 20 17.8619 20 15.8571 20H8.14286C6.1381 20 5.13571 20 4.4039 19.5402C4.02229 19.3004 3.69961 18.9777 3.45983 18.5961C3 17.8643 3 16.8619 3 14.8571V9.8541Z"
      stroke="currentColor"
    />
    <circle cx="12" cy="13" r="3.5" stroke="currentColor" />
  </svg>
);
export default SvgComponent;
