'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-white">
      <p className="text-7xl font-extrabold text-primary mb-4" aria-hidden="true">500</p>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        אירעה שגיאה בלתי צפויה
      </h1>
      <p className="text-text-muted text-lg mb-8 max-w-md">
        משהו השתבש. נסו שוב, ואם הבעיה נמשכת — צרו איתנו קשר.
      </p>
      <button
        type="button"
        onClick={reset}
        className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
      >
        נסה שוב
      </button>
    </div>
  );
}
