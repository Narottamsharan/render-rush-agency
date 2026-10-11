import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Browse the complete video editing, commercial campaigns, podcasts, and motion graphics portfolio of Render Rush.",
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
