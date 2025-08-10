'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

const MoodForm = () => {
  const [mood, setMood] = useState(3);
  const [note, setNote] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setMessage('');

    const { data: { user } } = await supabase.auth.getUser();

    if (user) {
      const { error } = await supabase.from('mood_entries').insert({
        mood_level: mood,
        note: note,
        user_id: user.id, 
      });

      if (error) {
        setMessage('Błąd podczas zapisywania: ' + error.message);
      } else {
        setMessage('Nastrój zapisany pomyślnie!');
        setNote(''); 
      }
    } else {
      setMessage('Musisz być zalogowany, aby zapisać nastrój.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg p-8 space-y-6 bg-gray-800 rounded-xl shadow-lg mt-8">
      <h2 className="text-xl font-bold text-center text-white">Jak się dziś czujesz?</h2>
      <div className="flex justify-around py-4">
        {[1, 2, 3, 4, 5].map((level) => (
          <button
            key={level}
            type="button"
            onClick={() => setMood(level)}
            className={`text-4xl transition-transform duration-200 ${mood === level ? 'transform scale-125' : 'opacity-50'}`}
          >
            {['😠', '😟', '😐', '😊', '😁'][level - 1]}
          </button>
        ))}
      </div>
      <div>
        <label htmlFor="note" className="text-sm font-medium text-gray-300 block mb-2">
          Dodaj notatkę (opcjonalnie)
        </label>
        <textarea
          id="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows="3"
          className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Co Ci leży na sercu?"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-md transition-colors"
      >
        Zapisz nastrój
      </button>
      {message && <p className="text-center text-sm text-gray-300 mt-4">{message}</p>}
    </form>
  );
};

export default MoodForm;