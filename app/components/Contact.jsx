import { PHONE, EMAIL } from '../lib/constants';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 px-6 bg-section-gray"
      aria-labelledby="contact-heading"
      data-animate
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2
          id="contact-heading"
          className="text-3xl md:text-4xl font-bold text-primary mb-4"
        >
          רוצה לשפר את איכות הספא שלך?
        </h2>
        <p className="text-text-muted text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          אפשר ליצור קשר לשיחה היכרות קצרה ללא התחייבות. ונבדוק יחד כיצד אנאלה יכולה לחזק את חוויית האורחים והערך
          העסקי של הספא שלך!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg">
          <a
            href={`mailto:${EMAIL}`}
            aria-label={`שלחו מייל: ${EMAIL}`}
            className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-medium min-h-[44px] underline underline-offset-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            {EMAIL}
          </a>
          <a
            href={`tel:${PHONE}`}
            aria-label={`התקשרו אלינו: ${PHONE}`}
            className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-medium min-h-[44px] underline underline-offset-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
