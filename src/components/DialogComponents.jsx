export const Heading = ({ children }) => {
  return (
    <div className="mx-1 text-center text-2xl font-bold mb-4 dark:text-white">
      {children}
    </div>
  );
};

export const Title = ({ children }) => {
  return (
    <div className="mx-1 text-xl font-semibold mb-2 dark:text-white underline underline-offset-2">
      {children}
    </div>
  );
};

export const Para = ({ children, bold = false, warning = false }) => {
  return (
    <div
      className={`mx-1 leading-tight mb-1 dark:text-white ${
        bold ? "font-semibold" : ""
      } ${warning ? "text-red-600 dark:!text-red-500" : ""}`}
    >
      {children}
    </div>
  );
};

export const ListItem = ({ children, bold = false, warning = false }) => {
  return (
    <li
      className={`mx-1 mb-1 dark:text-white ${bold ? "font-semibold" : ""} ${
        warning ? "text-red-600 dark:!text-red-500" : ""
      }`}
    >
      {children}
    </li>
  );
};

export const List = ({ children }) => {
  return (
    <ul className="mx-1 list-disc list-inside mb-2 dark:text-white">
      {children}
    </ul>
  );
};
