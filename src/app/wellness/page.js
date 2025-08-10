import MoodForm from '@/components/MoodForm';

export default function WellnessPage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold">Strefa Wellness</h1>
      <p className="mt-4 text-gray-300">Znajdź chwilę dla siebie. Zapisz nastrój i wypróbuj ćwiczenia relaksacyjne.</p>

      <MoodForm />
    </div>
  );
}