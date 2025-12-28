import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, BookOpen, Award } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--hero-gradient)] text-primary-foreground">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-faculty relative">
        <div className="py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wider text-primary-foreground/80 mb-4 animate-fade-in">
              Universitatea Exemplu
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Facultatea de Științe
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Formăm viitorii profesioniști printr-o educație de calitate, cercetare inovatoare și parteneriate cu industria. 
              Descoperă programele noastre de studiu și construiește-ți viitorul alături de noi.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button asChild variant="hero" size="lg">
                <Link to="/admitere">
                  Înscrie-te acum
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="lg">
                <Link to="/programe">
                  Explorează programele
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-4 bg-primary-foreground/10 rounded-lg p-5 backdrop-blur-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/20">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <p className="text-2xl font-bold">2,500+</p>
              <p className="text-sm text-primary-foreground/80">Studenți activi</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-primary-foreground/10 rounded-lg p-5 backdrop-blur-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/20">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <p className="text-2xl font-bold">15</p>
              <p className="text-sm text-primary-foreground/80">Programe de studiu</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-primary-foreground/10 rounded-lg p-5 backdrop-blur-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/20">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <p className="text-2xl font-bold">30+</p>
              <p className="text-sm text-primary-foreground/80">Ani de excelență</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
