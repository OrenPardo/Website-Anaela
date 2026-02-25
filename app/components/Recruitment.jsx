import Image from 'next/image';

export default function Recruitment() {
  return (
    <section
      id="recruitment"
      className="py-20 md:py-28 px-6 bg-section-gray"
      aria-labelledby="recruit-heading"
      data-animate
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2
              id="recruit-heading"
              className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight"
            >
              מרכז הגיוס וההכשרה שלנו
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              אנחנו מגייסים, מסננים, ומפתחים עבורך צוותי ספא מקצועיים,
              שמייצגים את המלון שלך בכבוד ושומרים על רמת שירות גבוהה
              ולאורך זמן.
            </p>

            <ul className="space-y-6 list-none p-0 m-0" role="list">
              <li>
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" aria-hidden="true"></span>
                  תהליך מיון קפדני
                </h3>
                <p className="text-text-muted leading-relaxed mr-5">
                  כל מצטרף חדש לצוות עובר תהליך סינון רב-שלבי: מבחן מקצועי
                  ובדיקות מתאימות לפני השתלבותו במערך הספא שלך.
                </p>
              </li>

              <li>
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" aria-hidden="true"></span>
                  התפתחות מקצועית מתמשכת
                </h3>
                <p className="text-text-muted leading-relaxed mr-5">
                  הדרכות שוטפות, אימוץ טכניקות חדשות וחידוד מיומנויות שירות
                  ומכירה - כדי שהצוות יישאר חד, מעודכן ומקצועי.
                </p>
              </li>
            </ul>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/spa-treatment.webp"
                alt="טיפול ספא מקצועי - מטפלת מעניקה עיסוי עם שמנים ונרות"
                width={456}
                height={376}
                className="w-full h-80 md:h-96 object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 456px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
