// apps/web/src/common/components/layouts/Footer.tsx
'use client';

import Link from 'next/link';
import { Plane } from 'lucide-react';
import { Button } from '@/components/button';
import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Blog', href: '/blog' },
        { label: 'Press', href: '/press' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '/support' },
        { label: 'Safety Center', href: '/safety' },
        { label: 'Contact Us', href: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Cookie Policy', href: '/cookies' },
      ],
    },
  ];

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Plane className="h-6 w-6" />
              <span className="text-lg font-bold">Uboor</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Making travel planning effortless and enjoyable
            </p>
            
            {/* Social Links */}
            <div className="flex gap-2 mt-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                  <Instagram className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                  <Facebook className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-2">
              <h4 className="text-sm font-semibold mb-2">{section.title}</h4>
              <div className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} Uboor, Inc. All rights reserved.
            <br />
            Made with ❤️ by travel enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
}