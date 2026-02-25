'use client';

import { useEffect, useRef } from 'react';
import { PHONE, EMAIL } from '../lib/constants';

export default function AccessibilityDialog({ isOpen, onClose, triggerRef }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      onClose();
      triggerRef?.current?.focus();
    };

    dialog.addEventListener('close', handleClose);
    return () => dialog.removeEventListener('close', handleClose);
  }, [onClose, triggerRef]);

  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      id="accessibility-statement"
      className="a11y-dialog"
      aria-labelledby="a11y-dialog-title"
      onClick={handleBackdropClick}
    >
      <div className="a11y-dialog-content">
        <div className="flex items-center justify-between mb-6">
          <h2 id="a11y-dialog-title" className="text-2xl font-bold text-primary">
            הצהרת נגישות
          </h2>
          <button
            type="button"
            className="a11y-dialog-close min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="סגור הצהרת נגישות"
            onClick={() => dialogRef.current?.close()}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="text-text-muted leading-relaxed space-y-4">
          <p>
            אנאלה מחויבת להנגשת האתר לאנשים עם מוגבלויות, בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות,
            התשנ״ח-1998, תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע״ג-2013,
            ובהתאם לתקן הישראלי ת״י 5568 המבוסס על הנחיות{' '}
            <span lang="en" dir="ltr">WCAG 2.2</span> ברמה <span lang="en" dir="ltr">AA</span>.
          </p>

          <h3 className="text-lg font-bold text-gray-900">רמת הנגישות</h3>
          <p>
            אתר זה עומד בדרישות תקן ת״י 5568 ברמה AA, הכוללות בין היתר: ניגודיות צבעים מספקת,
            ניווט מקלדת מלא, תמיכה בטכנולוגיות מסייעות ומבנה סמנטי תקין.
          </p>

          <h3 className="text-lg font-bold text-gray-900">פעולות הנגשה שבוצעו</h3>
          <ul className="list-disc pr-6 space-y-1" role="list">
            <li>מבנה סמנטי עם תגיות HTML תקניות (כותרות, קישורים, רשימות, אזורי ציון דרך)</li>
            <li>ניווט מלא באמצעות מקלדת עם מחוון מיקוד נראה בכל רכיב אינטראקטיבי</li>
            <li>קישור דילוג לתוכן הראשי</li>
            <li>תמיכה בקוראי מסך ותוויות ARIA מתאימות</li>
            <li>ניגודיות צבעים בהתאם לתקן AA — יחס 4.5:1 לפחות לטקסט רגיל, 3:1 לטקסט גדול ולמחווני מיקוד</li>
            <li>קישורים מסומנים בקו תחתון ולא בצבע בלבד</li>
            <li>תמיכה בהגדלת טקסט עד 200% ללא אובדן תוכן או תפקוד</li>
            <li>
              כיבוד הגדרת הנפשה מופחתת (<span lang="en" dir="ltr">prefers-reduced-motion</span>)
            </li>
            <li>אזורי לחיצה בגודל מינימלי של 44×44 פיקסלים</li>
            <li>תוכן מותאם לכיוון ימין-לשמאל (RTL)</li>
          </ul>

          <h3 className="text-lg font-bold text-gray-900">מגבלות ידועות</h3>
          <p>
            למרות המאמצים להנגיש את כלל רכיבי האתר, ייתכן שחלקים מסוימים אינם מונגשים באופן מלא.
            אנו ממשיכים לפעול לשיפור הנגישות באופן שוטף.
          </p>

          <h3 className="text-lg font-bold text-gray-900">רכז/ת נגישות</h3>
          <p>לפניות בנושא נגישות ניתן לפנות לרכזת הנגישות:</p>
          <p>
            טלפון:{' '}
            <a href={`tel:${PHONE}`} className="text-primary hover:text-primary-dark font-medium underline underline-offset-2">
              {PHONE}
            </a>
            <br />
            דוא״ל:{' '}
            <a href={`mailto:${EMAIL}`} className="text-primary hover:text-primary-dark font-medium underline underline-offset-2">
              {EMAIL}
            </a>
          </p>

          <h3 className="text-lg font-bold text-gray-900">הגשת תלונה</h3>
          <p>
            אם נתקלת בבעיית נגישות באתר ולא קיבלת מענה מספק, ניתן לפנות לנציבות שוויון זכויות
            לאנשים עם מוגבלויות:
          </p>
          <p>
            טלפון:{' '}
            <a href="tel:*6763" className="text-primary hover:text-primary-dark font-medium underline underline-offset-2" dir="ltr">
              *6763
            </a>
            <br />
            אתר:{' '}
            <a
              href="https://www.gov.il/he/departments/units/commission-equal-rights-persons-disabilities"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark font-medium underline underline-offset-2"
            >
              נציבות שוויון זכויות לאנשים עם מוגבלויות
            </a>
          </p>

          <p className="text-sm pt-2 border-t border-gray-200">
            הצהרה זו עודכנה לאחרונה בתאריך:{' '}
            <time dateTime="2026-02-22">22 בפברואר 2026</time>
          </p>
        </div>
      </div>
    </dialog>
  );
}
