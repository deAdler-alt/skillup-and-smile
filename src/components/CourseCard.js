import React from 'react';

// Nasz komponent przyjmuje teraz tylko te dane, które faktycznie mamy i potrzebujemy.
const CourseCard = ({ title, description, category }) => {
  return (
    // Zachowujemy świetny wygląd z wersji AI: tło, cienie, zaokrąglenia i efekty hover.
    // Używamy prostych przejść Tailwind zamiast Framer Motion.
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-purple-500/20 transition-all duration-300 ring-1 ring-white/10">
      <div className="p-6">
        {/* Kategoria - mały, wyróżniający się tekst na górze */}
        <p className="text-sm font-semibold text-purple-400 mb-2">{category}</p>
        
        {/* Tytuł kursu - duży i wyraźny */}
        <h3 className="text-xl font-bold text-white mb-3 h-16">{title}</h3>
        
        {/* Opis - zwięzły i czytelny */}
        <p className="text-gray-400 text-sm mb-6 h-20">{description}</p>
        
        {/* Główny przycisk akcji - prosty i skuteczny */}
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-full transition-colors duration-200">
          Rozpocznij naukę
        </button>
      </div>
    </div>
  );
};

export default CourseCard;