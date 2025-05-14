import React from "react";
import FAQ from "../components/common/FAQ";
import ContactForm from "../components/common/ContactForm";

const Support = () => {
  const faqs = [
    {
      question: "چگونه گیاه جدیدی به اپلیکیشن اضافه کنم؟",
      answer:
        "برای اضافه کردن گیاه جدید، به بخش مدیریت گیاهان بروید و گزینه افزودن گیاه را انتخاب کنید.",
    },
    {
      question: "چگونه بیماری یا آفت گیاه خود را شناسایی کنم؟",
      answer:
        "از بخش تشخیص آفات و بیماری‌ها استفاده کنید و تصویر گیاه خود را آپلود کنید.",
    },
    {
      question: "نحوه محاسبه زمان کوددهی به گیاهان چگونه است؟",
      answer:
        "بر اساس نوع گیاه و شرایط نگهداری، سیستم زمان مناسب کوددهی را پیشنهاد می‌دهد.",
    },
    {
      question: "چگونه گیاهان خود را در اپلیکیشن دسته‌بندی کنم؟",
      answer:
        "از بخش مدیریت گیاهان، دسته‌بندی‌های جدید ایجاد کنید و گیاهان را به آن‌ها اضافه کنید.",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-5 text-center">پشتیبانی</h1>
      <section className="mb-12">
        <h2 className="text-sm font-bold mb-5">درباره‌ی ما</h2>
        <p className="text-sm text-gray-600 leading-relaxed text-justify">
          ما در این اپلیکیشن با عشق به گیاهان و طبیعت، به شما کمک می‌کنیم تا
          گیاهان خود را بهتر بشناسید، مراقبت کنید و از آن‌ها لذت ببرید. با
          استفاده از تکنولوژی‌های پیشرفته، تلاش می‌کنیم تا بهترین نوع کود، زمان
          مناسب آبیاری و شرایط نگهداری را برای گیاهان شما فراهم کنیم.
        </p>
      </section>
      <section className="mb-12">
        <h2 className="text-sm font-bold mb-5">سوالات متداول</h2>
        <FAQ faqs={faqs} />
      </section>
      <section>
        <h2 className="text-sm font-bold mb-5">با ما در ارتباط باشید</h2>
        <ContactForm />
      </section>
    </div>
  );
};

export default Support;
