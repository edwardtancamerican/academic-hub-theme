import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const routeNames: Record<string, string> = {
  '': 'Acasă',
  'despre': 'Despre facultate',
  'programe': 'Programe de studiu',
  'admitere': 'Admitere',
  'cadre-didactice': 'Cadre didactice',
  'anunturi': 'Anunțuri',
  'contact': 'Contact',
};

export function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav className="bg-secondary/50 border-b border-border" aria-label="Breadcrumb">
      <div className="container-faculty py-3">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link 
              to="/" 
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Home className="h-4 w-4" />
              <span className="sr-only">Acasă</span>
            </Link>
          </li>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const name = routeNames[value] || value;

            return (
              <li key={to} className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
                {isLast ? (
                  <span className="text-foreground font-medium">{name}</span>
                ) : (
                  <Link 
                    to={to} 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
