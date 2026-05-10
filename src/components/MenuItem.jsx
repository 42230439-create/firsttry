import { Flame, Leaf } from 'lucide-react';

export function MenuItem({ item }) {
  return (
    <div className="group flex flex-col sm:flex-row justify-between items-start p-6 -mx-6 rounded-2xl transition-all duration-300 hover:bg-white/60 hover:shadow-[0_20px_40px_-15px_rgba(143,158,139,0.3)] hover:-translate-y-1">
      <div className="flex-1 pr-6">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <h3 className="text-2xl font-serif text-charcoal-green group-hover:text-black transition-colors">{item.name}</h3>
          
          <div className="flex gap-2 items-center">
            {item.isChefSelection && (
              <span className="font-script text-clay text-xl tracking-wide -mt-1 ml-2">
                Chef's Selection
              </span>
            )}
            {item.isSpicy && (
              <span title="Spicy" className="inline-flex items-center justify-center bg-red-50 text-red-500 p-1.5 rounded-full">
                <Flame size={14} />
              </span>
            )}
            {item.isVegan && (
              <span title="Vegan" className="inline-flex items-center justify-center bg-sage/20 text-sage p-1.5 rounded-full">
                <Leaf size={14} />
              </span>
            )}
          </div>
        </div>
        <p className="text-charcoal-green/70 text-base leading-relaxed max-w-2xl font-light">
          {item.description}
        </p>
      </div>
      <div className="mt-6 sm:mt-0 whitespace-nowrap">
        <span className="text-xl font-medium text-clay group-hover:text-electric-teal transition-colors duration-300">
          ${item.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
