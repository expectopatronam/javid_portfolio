import Link from "next/link";
import { FileText, ArrowUp } from "lucide-react";
import { PERSONAL_INFO, FOOTER_DATA } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[.07] bg-[#07080B]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row gap-3 items-center justify-between text-[13px] text-zinc-500">
        <div className="flex items-center gap-4">
          <span>{FOOTER_DATA.copyright}</span>
          <span>·</span>
          <Link
            href={PERSONAL_INFO.resumePage}
            className="text-zinc-400 hover:text-[#C5F560] transition inline-flex items-center gap-1 font-medium"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume (Viewer &amp; PDF)</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-mono">{FOOTER_DATA.builtWith}</span>
          <a
            href="#top"
            className="p-1.5 rounded-full border border-white/10 hover:border-white/30 text-zinc-400 hover:text-white transition"
            title="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
