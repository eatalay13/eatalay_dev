export default function Footer():JSX.Element {
  let year = new Date().getFullYear();
  return (
    <footer className="bg-slate-50 h-1/8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">Copyright © {year} Emrah Atalay,All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
