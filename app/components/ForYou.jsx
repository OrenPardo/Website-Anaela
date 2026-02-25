export default function ForYou() {
  return (
    <section
      id="for-you"
      className="py-20 md:py-28 px-6 bg-white"
      aria-labelledby="foryou-heading"
      data-animate
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-section-gray rounded-3xl p-8 md:p-12">
          <h2
            id="foryou-heading"
            className="text-3xl md:text-4xl font-bold text-center text-primary mb-4"
          >
            האם זה בשבילך?
          </h2>
          <p className="text-center text-text-muted text-lg mb-10 max-w-2xl mx-auto">
            השותפות עם אנאלה מתאימה למלונות ולאתרי אירוח שרוצים ספא חזק ומנוהל היטב - בלי להקים לבד
            מערך תפעול, גיוס והכשרה.
          </p>

          <ul className="grid sm:grid-cols-2 gap-6 list-none p-0 m-0" role="list">
            <li className="bg-white rounded-xl p-6 flex gap-4 items-start shadow-sm">
              <div
                className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-primary/10 text-primary mt-1"
                aria-hidden="true"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                </svg>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                משקיעים זמן רב בניהול ותפעול של ספא במקום ניהול המלון.
              </p>
            </li>

            <li className="bg-white rounded-xl p-6 flex gap-4 items-start shadow-sm">
              <div
                className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-primary/10 text-primary mt-1"
                aria-hidden="true"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                </svg>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                רוצים לשפר את חוויית האורחים ולהפיק יותר מהשטחים והחדרים הקיימים אצלכם.
              </p>
            </li>

            <li className="bg-white rounded-xl p-6 flex gap-4 items-start shadow-sm">
              <div
                className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-primary/10 text-primary mt-1"
                aria-hidden="true"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                מתמודדים עם חוסר יציבות או תחלופה גבוהה בצוות הספא.
              </p>
            </li>

            <li className="bg-white rounded-xl p-6 flex gap-4 items-start shadow-sm">
              <div
                className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-primary/10 text-primary mt-1"
                aria-hidden="true"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                רוצים ספא באיכות פרימיום בלי להקים מערך בצורה עצמאית.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
