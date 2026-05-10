import { Utensils } from 'lucide-react';

export function Header() {
  return (
    <header className="pt-24 pb-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <Utensils className="w-12 h-12 mb-8 text-sage" />
        <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 font-serif text-charcoal-green tracking-tight">
          L'Aura Brasserie
        </h1>
        <p className="text-clay text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">
          A modern culinary experience celebrating fresh, seasonal ingredients and timeless elegance.
        </p>
      </div>
    </header>
  );
}
