'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); 

  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      alert('Błąd podczas rejestracji: ' + error.message);
    } else {
      alert('Rejestracja udana! Możesz się teraz zalogować.');
    }
  };

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      alert('Błąd podczas logowania: ' + error.message);
    } else {
      router.push('/');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-white">Witaj!</h1>

        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-300 block mb-2">
              Adres email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="ty@email.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-300 block mb-2">
              Hasło
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Minimum 6 znaków"
            />
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={handleSignIn}
            className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-md transition-colors"
          >
            Zaloguj się
          </button>
          <button
            onClick={handleSignUp}
            className="w-full py-3 px-4 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-md transition-colors"
          >
            Zarejestruj się
          </button>
        </div>

      </div>
    </div>
  );
}