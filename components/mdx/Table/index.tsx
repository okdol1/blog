interface TableProps {
  children: React.ReactNode;
}

const Table: React.FC<TableProps> = ({ children }) => {
  return (
    <div className="overflow-x-auto pt-2">
      <table className="w-full border-collapse border border-gray-800 text-left text-sm">
        {children}
      </table>
    </div>
  );
};

export default Table;
