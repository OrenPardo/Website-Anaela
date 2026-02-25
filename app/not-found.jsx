import Link from 'next/link';

export const metadata = {
  title: 'הדף לא נמצא — אנאלה',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-white">
      <p className="text-7xl font-extrabold text-primary mb-4" aria-hidden="true">404</p>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        הדף שחיפשת לא נמצא
      </h1>
      <p className="text-text-muted text-lg mb-8 max-w-md">
        ייתכן שהקישור שגוי או שהדף הוסר. חזרו לעמוד הבית.
      </p>
      <Link
        href="/"
        className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
      >
        חזרה לעמוד הבית
      </Link>
    </div>
  );
}
