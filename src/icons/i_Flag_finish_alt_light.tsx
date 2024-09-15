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
      d="M5.5 12.5V5C5.5 4.7643 5.5 4.64645 5.57322 4.57322C5.64645 4.5 5.7643 4.5 6 4.5H10.0858C10.2902 4.5 10.3923 4.5 10.4842 4.53806C10.5761 4.57612 10.6484 4.64838 10.7929 4.79289L11.2071 5.20711C11.3516 5.35162 11.4239 5.42388 11.5158 5.46194C11.6077 5.5 11.7098 5.5 11.9142 5.5H17.0234C17.2952 5.5 17.4312 5.5 17.472 5.58523C17.5128 5.67045 17.4275 5.77634 17.2571 5.98812L14.6824 9.18647C14.5614 9.33674 14.5009 9.41188 14.5009 9.5C14.5009 9.58812 14.5614 9.66326 14.6824 9.81353L17.2571 13.0119C17.4275 13.2237 17.5128 13.3295 17.472 13.4148C17.4312 13.5 17.2952 13.5 17.0234 13.5H11.9142C11.7098 13.5 11.6077 13.5 11.5158 13.4619C11.4239 13.4239 11.3516 13.3516 11.2071 13.2071L10.7929 12.7929C10.6484 12.6484 10.5761 12.5761 10.4842 12.5381C10.3923 12.5 10.2902 12.5 10.0858 12.5H5.5ZM5.5 12.5V18.5"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgComponent;
