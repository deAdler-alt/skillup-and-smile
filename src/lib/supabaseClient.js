import { createClient } from '@supabase/supabase-js';

// Ten kod odczytuje klucze z pliku .env.local i tworzy jedno,
// reużywalne połączenie z bazą danych Supabase.
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);