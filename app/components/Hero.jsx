import Image from 'next/image';
import { PHONE } from '../lib/constants';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <Image
        src="/images/hero-bg.webp"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
      <div className="hero-circle" aria-hidden="true"></div>

      <div className="relative z-10 max-w-3xl text-center fade-in-up">
        <h1
          id="hero-heading"
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
        >
          אנאלה - שותף לניהול ספא
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed">
          אנאלה מתכננת, מקימה ומנהלת עבורך את מתחם הספא - מהחדר הריק ועד צוות
          מקצועי מוסמך ותפריטי טיפולים. לך רק נשאר להתמקד באורחים
        </p>
        <div className="mt-10">
          <a
            href={`tel:${PHONE}`}
            aria-label={`התקשרו אלינו: ${PHONE}`}
            className="inline-block px-10 py-4 bg-primary text-white font-semibold rounded-lg text-lg hover:bg-primary-dark transition-colors shadow-md"
          >
            לדבר איתנו על הספא שלך
          </a>
        </div>
      </div>
    </section>
  );
}
