interface Props {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const EmptyState = ({ icon, title, description }: Props) => {
  return (
    <div className="flex flex-col items-center h-full text-center">
      {icon}
      <h1 className="text-2xl font-bold text-primary my-4">{title}</h1>
      <p className="text-secondary">{description}</p>
    </div>
  );
};

export default EmptyState;
