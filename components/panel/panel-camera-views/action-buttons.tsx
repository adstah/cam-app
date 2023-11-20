export const ActionButtons = () => {
  return (
    <div
      className={`fixed bottom-0 left-2/4 -translate-x-2/4 bg-slate-500
    flex row gap-2 p-2 rounded-t-lg`}
    >
      <button className="hover:bg-slate-400 p-2">Back</button>
      <button className="hover:bg-slate-400 p-2">Capture</button>
      <button className="hover:bg-slate-400 p-2">Record</button>
    </div>
  );
};
