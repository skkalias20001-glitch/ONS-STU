"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Youtube } from "lucide-react";

const navLinks = [
  { href: "#videos", label: "Videos" },
  { href: "#about", label: "About" },
  { href: "#games", label: "Games" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%2815%29-VTABZ9FDwV7yLxGVl2kwaCSGMJ6Tpn.png"
              alt="Onshore Studios Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-xl font-bold tracking-tight">Onshore Studios</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button asChild className="gap-2">
              <a
                href="https://www.youtube.com/@Onshore5446"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-4 w-4" />
                Subscribe
              </a>
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full gap-2">
              <a
                href="https://www.youtube.com/@Onshore5446"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-4 w-4" />
                Subscribe
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
