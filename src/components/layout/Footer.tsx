import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail, Clock, Facebook, Linkedin, Youtube } from 'lucide-react';

const quickLinks = [
  { name: 'Despre facultate', href: '/despre' },
  { name: 'Programe de studiu', href: '/programe' },
  { name: 'Admitere 2024', href: '/admitere' },
  { name: 'Cadre didactice', href: '/cadre-didactice' },
  { name: 'Anunțuri', href: '/anunturi' },
  { name: 'Contact', href: '/contact' },
];

const resourceLinks = [
  { name: 'Orare', href: '#' },
  { name: 'Cataloage studenți', href: '#' },
  { name: 'Regulamente', href: '#' },
  { name: 'Formulare', href: '#' },
  { name: 'Bibliotecă', href: '#' },
  { name: 'E-learning', href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-faculty section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-base font-semibold">Facultatea de Științe</p>
                <p className="text-xs text-background/60">Universitatea Exemplu</p>
              </div>
            </Link>
            <p className="text-sm text-background/70 leading-relaxed">
              Formăm viitorii profesioniști din 1990. Excelență academică și cercetare de vârf într-un mediu stimulant.
            </p>
            <div className="flex gap-3">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-background/10 hover:bg-background/20 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-background/10 hover:bg-background/20 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-background/10 hover:bg-background/20 transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Linkuri rapide</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Resurse</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary-light shrink-0" />
                <span className="text-sm text-background/70">
                  Str. Universității nr. 1<br />
                  București, 010001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary-light shrink-0" />
                <a href="tel:+40212345678" className="text-sm text-background/70 hover:text-background transition-colors">
                  +40 21 234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary-light shrink-0" />
                <a href="mailto:secretariat@facultate.ro" className="text-sm text-background/70 hover:text-background transition-colors">
                  secretariat@facultate.ro
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-0.5 text-primary-light shrink-0" />
                <span className="text-sm text-background/70">
                  Luni - Vineri<br />
                  08:00 - 16:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} Facultatea de Științe. Toate drepturile rezervate.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="text-sm text-background/60 hover:text-background transition-colors">
                Politica de confidențialitate
              </Link>
              <Link to="#" className="text-sm text-background/60 hover:text-background transition-colors">
                Termeni și condiții
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
