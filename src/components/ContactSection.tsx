export default function ContactSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-md mx-auto glass p-8 rounded-3xl border-accent/20">
        <h2 className="text-3xl font-black text-white mb-2">
          Let&apos;s build <br />
          <span className="text-accent">together.</span>
        </h2>
        <p className="text-slate-400 mb-8 text-sm">
          Have a vision? I have the tools to make it reality.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1 ml-1">
              Your Name
            </label>
            <input
              className="w-full bg-background-dark border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-accent focus:ring-0 transition-colors"
              placeholder="John Doe"
              type="text"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1 ml-1">
              Email
            </label>
            <input
              className="w-full bg-background-dark border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-accent focus:ring-0 transition-colors"
              placeholder="john@example.com"
              type="email"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1 ml-1">
              Project Details
            </label>
            <textarea
              className="w-full bg-background-dark border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-accent focus:ring-0 transition-colors"
              placeholder="Tell me about your idea..."
              rows={3}
            ></textarea>
          </div>
          <button className="hidden cursor-pointer w-full sm:flex min-w-30 items-center justify-center rounded-lg h-11 px-6 bg-primary text-white text-sm font-bold tracking-wide hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            SEND INQUIRY
          </button>
        </form>
      </div>
    </section>
  );
}
