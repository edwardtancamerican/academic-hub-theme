import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, FileText, Phone } from 'lucide-react';

export function CTASection() {
  return (
    <section className="section-padding bg-[var(--hero-gradient)] text-primary-foreground">
      <div className="container-faculty">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Începe-ți călătoria academică
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Înscrierile pentru anul universitar 2024-2025 sunt deschise. 
            Nu rata șansa de a face parte din comunitatea noastră academică.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button asChild variant="hero" size="lg">
              <Link to="/admitere">
                Înscrie-te acum
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="hero-outline" size="lg">
              <Link to="/contact">
                Contactează-ne
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-6 rounded-lg bg-primary-foreground/10 backdrop-blur-sm">
              <Calendar className="h-8 w-8 mb-3" />
              <h3 className="font-semibold mb-1">Termen limită</h3>
              <p className="text-sm text-primary-foreground/80">15 Septembrie 2024</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-primary-foreground/10 backdrop-blur-sm">
              <FileText className="h-8 w-8 mb-3" />
              <h3 className="font-semibold mb-1">Documente necesare</h3>
              <Link to="/admitere#documente" className="text-sm text-primary-foreground/80 hover:text-primary-foreground underline">
                Vezi lista completă
              </Link>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-primary-foreground/10 backdrop-blur-sm">
              <Phone className="h-8 w-8 mb-3" />
              <h3 className="font-semibold mb-1">Suport admitere</h3>
              <a href="tel:+40212345679" className="text-sm text-primary-foreground/80 hover:text-primary-foreground underline">
                +40 21 234 5679
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
