// Krok 1: Oznaczamy jako komponent kliencki
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  // Krok 2: Tworzymy stan, który będzie przechowywał informację o zalogowanym użytkowniku
  const [user, setUser] = useState(null);
  const router = useRouter();

  // Krok 3: Używamy useEffect, aby sprawdzić status logowania, gdy komponent się załaduje
  useEffect(() => {
    const getSession = async () => {
      // Pobieramy aktualną sesję z Supabase
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    };

    getSession();

    // Krok 4: Ustawiamy "nasłuchiwacz", który będzie reagował na zmiany stanu logowania (log-in, log-out)
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    // Krok 5: "Sprzątamy" nasłuchiwacz, gdy komponent zostanie odmontowany
    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  // Funkcja do wylogowania
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    // Po wylogowaniu przekierowujemy na stronę główną
    router.push('/');
  };

  return (
    <nav className="w-full bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          SkillUp & Smile
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/courses" className="hover:text-purple-300 transition-colors duration-200">
            Kursy
          </Link>
          <Link href="/wellness" className="hover:text-purple-300 transition-colors duration-200">
            Wellness
          </Link>
          <Link href="/dashboard" className="hover:text-purple-300 transition-colors duration-200">
            Mój Panel
          </Link>

          {/* Krok 6: Magia! Renderowanie warunkowe przycisków */}
          {user ? (
            // Jeśli użytkownik JEST zalogowany
            <>
              <span className="text-sm text-gray-300">{user.email}</span>
              <button 
                onClick={handleSignOut}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200"
              >
                Wyloguj się
              </button>
            </>
          ) : (
            // Jeśli użytkownik NIE JEST zalogowany
            <Link href="/login" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200">
              Zaloguj się
            </Link>
          )}
        </div>
        {/* ... reszta kodu dla mobile bez zmian ... */}
      </div>
    </nav>
  );
};

export default Navbar;