import React from "react";
import PaymentTable from "../components/common/PaymentTable";
import PageDescription from "../components/common/PageDescription";

const Payments = () => {
  return (
    <div className="p-4">
      <PaymentTable />
      <PageDescription
        title="تاریخچه پرداخت های شما"
        description="در این بخش می‌توانید تمامی تراکنش‌های خود را مشاهده، فیلتر و مدیریت کنید. برای دانلود رسید هر تراکنش، بر روی دکمه دانلود در جدول بالا استفاده کنید. در صورت نیاز به راهنمایی بیشتر، پشتیبانی در تماس است."
      />
    </div>
  );
};

export default Payments;
