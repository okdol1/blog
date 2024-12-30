interface TableCellProps {
  children: React.ReactNode;
  isHeader?: boolean;
}

const TableCell: React.FC<TableCellProps> = ({ children, isHeader }) => {
  const className = isHeader
    ? "font-bold border-r border-gray-800 px-4 py-2"
    : "border-r border-gray-800 px-4 py-2";

  return isHeader ? (
    <th className={className}>{children}</th>
  ) : (
    <td className={className}>{children}</td>
  );
};

export default TableCell;
