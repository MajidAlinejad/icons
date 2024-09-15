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
      d="M5.59202 19.282L5.81901 18.8365L5.59202 19.282ZM4.71799 18.408L5.16349 18.181L4.71799 18.408ZM18.408 19.282L18.181 18.8365L18.408 19.282ZM19.282 18.408L18.8365 18.181L19.282 18.408ZM18.408 5.71799L18.181 6.16349L18.408 5.71799ZM19.282 6.59202L18.8365 6.81901L19.282 6.59202ZM5.59202 5.71799L5.81901 6.16349L5.59202 5.71799ZM4.71799 6.59202L5.16349 6.81901L4.71799 6.59202ZM9 3.5C9 3.22386 8.77614 3 8.5 3C8.22386 3 8 3.22386 8 3.5H9ZM8 7.5C8 7.77614 8.22386 8 8.5 8C8.77614 8 9 7.77614 9 7.5H8ZM16 3.5C16 3.22386 15.7761 3 15.5 3C15.2239 3 15 3.22386 15 3.5L16 3.5ZM15 7.5C15 7.77614 15.2239 8 15.5 8C15.7761 8 16 7.77614 16 7.5H15ZM7.7 6H16.3V5H7.7V6ZM16.3 19H7.7V20H16.3V19ZM19 8.7V9.5H20V8.7H19ZM19 9.5V16.3H20V9.5H19ZM5 16.3V9.5H4V16.3H5ZM5 9.5V8.7H4V9.5H5ZM19.5 9H4.5V10H19.5V9ZM7.7 19C7.1317 19 6.73554 18.9996 6.42712 18.9744C6.12454 18.9497 5.95069 18.9036 5.81901 18.8365L5.36502 19.7275C5.66117 19.8784 5.98126 19.9413 6.34569 19.9711C6.70428 20.0004 7.1482 20 7.7 20V19ZM4 16.3C4 16.8518 3.99961 17.2957 4.02891 17.6543C4.05868 18.0187 4.12159 18.3388 4.27248 18.635L5.16349 18.181C5.0964 18.0493 5.05031 17.8755 5.02559 17.5729C5.00039 17.2645 5 16.8683 5 16.3H4ZM5.81901 18.8365C5.53677 18.6927 5.3073 18.4632 5.16349 18.181L4.27248 18.635C4.51217 19.1054 4.89462 19.4878 5.36502 19.7275L5.81901 18.8365ZM16.3 20C16.8518 20 17.2957 20.0004 17.6543 19.9711C18.0187 19.9413 18.3388 19.8784 18.635 19.7275L18.181 18.8365C18.0493 18.9036 17.8755 18.9497 17.5729 18.9744C17.2645 18.9996 16.8683 19 16.3 19V20ZM19 16.3C19 16.8683 18.9996 17.2645 18.9744 17.5729C18.9497 17.8755 18.9036 18.0493 18.8365 18.181L19.7275 18.635C19.8784 18.3388 19.9413 18.0187 19.9711 17.6543C20.0004 17.2957 20 16.8518 20 16.3H19ZM18.635 19.7275C19.1054 19.4878 19.4878 19.1054 19.7275 18.635L18.8365 18.181C18.6927 18.4632 18.4632 18.6927 18.181 18.8365L18.635 19.7275ZM16.3 6C16.8683 6 17.2645 6.00039 17.5729 6.02559C17.8755 6.05031 18.0493 6.0964 18.181 6.16349L18.635 5.27248C18.3388 5.12159 18.0187 5.05868 17.6543 5.02891C17.2957 4.99961 16.8518 5 16.3 5V6ZM20 8.7C20 8.1482 20.0004 7.70428 19.9711 7.34569C19.9413 6.98126 19.8784 6.66117 19.7275 6.36502L18.8365 6.81901C18.9036 6.95069 18.9497 7.12454 18.9744 7.42712C18.9996 7.73554 19 8.1317 19 8.7H20ZM18.181 6.16349C18.4632 6.3073 18.6927 6.53677 18.8365 6.81901L19.7275 6.36502C19.4878 5.89462 19.1054 5.51217 18.635 5.27248L18.181 6.16349ZM7.7 5C7.1482 5 6.70428 4.99961 6.34569 5.02891C5.98126 5.05868 5.66117 5.12159 5.36502 5.27248L5.81901 6.16349C5.95069 6.0964 6.12454 6.05031 6.42712 6.02559C6.73554 6.00039 7.1317 6 7.7 6V5ZM5 8.7C5 8.1317 5.00039 7.73554 5.02559 7.42712C5.05031 7.12454 5.0964 6.95069 5.16349 6.81901L4.27248 6.36502C4.12159 6.66117 4.05868 6.98126 4.02891 7.34569C3.99961 7.70428 4 8.1482 4 8.7H5ZM5.36502 5.27248C4.89462 5.51217 4.51217 5.89462 4.27248 6.36502L5.16349 6.81901C5.3073 6.53677 5.53677 6.3073 5.81901 6.16349L5.36502 5.27248ZM8 3.5V7.5H9V3.5H8ZM15 3.5L15 7.5H16L16 3.5L15 3.5Z"
      fill="#7E869E"
      fillOpacity="0.25"
    />
    <path d="M12 17L12 12" stroke="currentColor" strokeLinecap="round" />
    <path d="M14.5 14.5L9.5 14.5" stroke="currentColor" strokeLinecap="round" />
  </svg>
);
export default SvgComponent;
