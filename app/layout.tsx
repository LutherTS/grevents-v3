import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grevents v3: Simply Sharing",
  description: "Grevents now with a focus on aesthetics and ergonomics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

/* Notes
git reset --soft HEAD~1
git reset --hard HEAD~1 
Source: https://graphite.dev/guides/how-to-delete-a-git-commit. 
git rm prisma/dev.db-journal
Source: https://www.quora.com/How-do-I-uncommit-a-file-in-Git
git rm removes the file both from git and from the computer. The preferred flow is copying the file on the desktop, then git rm'ing it from the terminal, closing VSCode, relaunching VSCode, and dragging the file back into VSCode to see it be effectively ignored.
*/
