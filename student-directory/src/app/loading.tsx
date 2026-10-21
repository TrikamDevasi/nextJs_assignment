export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 animate-pulse">
      <div className="mb-6">
        <div className="h-8 w-44 rounded-lg bg-slate-200" />
        <div className="mt-2 h-4 w-72 rounded bg-slate-200" />
      </div>

      <div className="mb-6 h-14 rounded-xl border border-slate-200 bg-white" />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5"
          >
            <div>
              <div className="flex items-start justify-between">
                <div className="h-11 w-11 rounded-xl bg-slate-200" />
                <div className="h-5 w-16 rounded bg-slate-200" />
              </div>
              <div className="mt-4 h-5 w-32 rounded bg-slate-200" />
              <div className="mt-2 h-4 w-24 rounded bg-slate-200" />
            </div>
            <div className="mt-5 border-t border-slate-100 pt-3.5">
              <div className="h-4 w-20 rounded bg-slate-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
