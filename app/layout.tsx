import "./globals.css";
import Link from "next/link";
import { Toaster } from "sonner";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><header className="sticky top-0 z-20 border-b bg-white/90 p-4 dark:bg-zinc-900/90"><nav className="mx-auto flex max-w-6xl items-center justify-between"><Link href="/" className="font-bold">Grenada Board</Link><div className="flex gap-4 text-sm"><Link href="/feed">Browse</Link><Link href="/categories">Categories</Link><Link href="/create">Create Post</Link><Link href="/signin">Sign In</Link></div></nav></header><main className="mx-auto max-w-6xl p-4">{children}</main><Toaster richColors /></body></html>;
}
