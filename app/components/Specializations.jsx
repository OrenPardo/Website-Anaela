export default function Specializations() {
  return (
    <section
      id="specializations"
      className="py-20 md:py-28 px-6 bg-white"
      aria-labelledby="spec-heading"
      data-animate
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="spec-heading"
          className="text-3xl md:text-4xl font-bold text-center text-primary mb-16"
        >
          ההתמחויות שלנו
        </h2>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 list-none p-0 m-0" role="list">
          <li className="feature-card bg-section-gray rounded-2xl p-8 text-center">
            <div
              className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-primary/10 text-primary"
              aria-hidden="true"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">סטנדרט מותג ללא פשרות</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              אנחנו שומרים על רמת איכות ועיצוב שמתאימה ליוקרה ולזהות המלון שלך.
            </p>
          </li>

          <li className="feature-card bg-section-gray rounded-2xl p-8 text-center">
            <div
              className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-primary/10 text-primary"
              aria-hidden="true"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">שילוב מלא בתפעול המלון</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              הספא משתלב בתהליכי התפעול, הקבלה והשירות בלי להעמיס על המערך הקיים
            </p>
          </li>

          <li className="feature-card bg-section-gray rounded-2xl p-8 text-center">
            <div
              className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-primary/10 text-primary"
              aria-hidden="true"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">האורחים יבקשו שוב</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              אנחנו בונים חוויית ספא שגורמת לאורחים לרצות לחזור ולהמליץ
            </p>
          </li>

          <li className="feature-card bg-section-gray rounded-2xl p-8 text-center">
            <div
              className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-primary/10 text-primary"
              aria-hidden="true"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">מצוינות תפעולית</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              אנחנו מנהלים את כל תפעול הספא - משיבוץ, מלאי וגביית תשלום עם הגדלת הכנסות - בצורה חלקה ונעימה.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
