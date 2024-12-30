interface TableRowProps {
  children: React.ReactNode;
  isHeader?: boolean;
}

const TableRow: React.FC<TableRowProps> = ({ children, isHeader }) => {
  const className = isHeader
    ? "bg-gray-800 bg-opacity-60 font-bold"
    : "border-t border-gray-800";

  return <tr className={className}>{children}</tr>;
};

export default TableRow;
