type CalloutType = "info" | "warning" | "success" | "error";

interface CalloutProps {
  children: React.ReactNode;
  icon?: string;
  type?: CalloutType;
}

const Callout: React.FC<CalloutProps> = ({
  children,
  icon = "💡",
  type = "info",
}) => {
  const typeStyles = {
    info: "bg-gray-800 bg-opacity-60",
    warning: "bg-yellow-100 text-yellow-800",
    success: "bg-green-100 text-green-800",
    error: "bg-red-100 text-red-800",
  };

  return (
    <div className="py-1">
      <div className={`flex items-start p-4 rounded-md ${typeStyles[type]}`}>
        <span className="mr-3 text-2xl flex-shrink-0">{icon}</span>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Callout;
