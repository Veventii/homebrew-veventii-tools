import Link from "next/link";
import { Linkedin, Twitter, Mail, Github } from "lucide-react";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Logo />
            </div>
            <p className="text-sm text-muted-foreground">
              Building innovative software products that solve real problems and
              enhance productivity.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com/company/veventii"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="mailto:contact@Veventii.com"
                className="text-muted-foreground hover:text-primary"
              >
                <Mail className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Homebrew Formulas</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/gitrepomind"
                  className="text-muted-foreground hover:text-primary"
                >
                  GitRepoMind
                </Link>
              </li>
              <li>
                <Link
                  href="/localcloud"
                  className="text-muted-foreground hover:text-primary"
                >
                  LocalCloud
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Veventii Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://rsvp.now"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  RSVP.now
                </a>
              </li>
              <li>
                <a
                  href="https://zu.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  Zu.lk
                </a>
              </li>
              <li>
                <a
                  href="https://catchup-ai.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  CatchUp.AI
                </a>
              </li>
              <li>
                <a
                  href="https://startuplab.Veventii.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  StartupLab
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Developer Tap</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/Veventii/homebrew-veventii-tools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary flex items-center gap-1.5"
                >
                  <Github className="h-4 w-4" /> Git Repository
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Veventii/homebrew-veventii-tools/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  Releases & Hashes
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground max-w-full">
          <p>
            © {new Date().getFullYear()} Veventii PVT LTD. Registered in Sri
            Lanka. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
