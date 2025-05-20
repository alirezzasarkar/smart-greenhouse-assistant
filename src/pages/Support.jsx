import React from "react";
import FAQ from "../components/common/FAQ";
import ContactForm from "../components/common/ContactForm";
import PageDescription from "../components/common/PageDescription";

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
      <section className="mb-12">
        <PageDescription
          title="درباره‌ی ما"
          description="این اپلیکیشن با هدف تسهیل مراقبت از گیاهان شما طراحی شده است.  
  با بهره‌گیری از فناوری‌های نوین، اطلاعات دقیق درباره نیازهای گیاهان‌تان را در اختیار شما می‌گذاریم،  
  از انتخاب بهترین کود و زمان آبیاری گرفته تا شرایط ایده‌آل برای رشد سالم گیاهان."
        />
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
