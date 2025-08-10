import CourseCard from '@/components/CourseCard';
import { supabase } from '@/lib/supabaseClient';

export default async function CoursesPage() {

  const { data: courses, error } = await supabase.from('courses').select('*');

  if (error) {
    console.error("Błąd pobierania danych z Supabase:", error);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Dostępne Kursy</h1>
      <p className="mt-4 mb-8 text-gray-300">Przeglądaj naszą bibliotekę i zdobywaj nowe umiejętności.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {!courses || courses.length === 0 && (
          <p>Nie znaleziono żadnych kursów. Sprawdź ustawienia RLS w Supabase!</p>
        )}

        {courses?.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            description={course.description}
            category={course.category}
          />
        ))}
      </div>
    </div>
  );
}