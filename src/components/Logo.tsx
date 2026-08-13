const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="select-none text-primary flex items-center justify-center">
        <span className="material-symbols-outlined text-3xl">terminal</span>
      </div>
      <h2 className="text-slate-100 text-xl font-bold tracking-tight">
        BMA <span className="text-primary">WebDev</span>
      </h2>
    </div>
  );
};

export default Logo;
