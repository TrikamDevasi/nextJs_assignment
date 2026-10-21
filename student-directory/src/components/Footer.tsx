export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:px-6">
        <div>
          <p>
            Campus Directory © Academic Records System · Frontend Practice
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span>System Record ID: 0948-CS-AM</span>
          <span>·</span>
          <span>Updated Daily via Campus Records API</span>
        </div>
      </div>
    </footer>
  );
}
