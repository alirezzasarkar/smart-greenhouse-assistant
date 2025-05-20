import React, { useState } from "react";
import PaymentTable from "../components/common/PaymentTable";
import PageDescription from "../components/common/PageDescription";
import Loading from "../components/common/PlantLoader";

/**
 * Payments component renders a page for user to view and manage their payment history.
 *
 * The page consists of a table that displays a list of all transactions, with options to download receipts.
 * A description is also provided for how to use the page.
 *
 * @returns {JSX.Element} The JSX element representing the Payments component.
 */
const Payments = () => {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="p-4">
      <PaymentTable />
      <PageDescription
        title="تاریخچه پرداخت‌های شما"
        description="در این بخش می‌توانید تمامی تراکنش‌های خود را مشاهده و مدیریت کنید. برای دانلود رسید هر تراکنش، از دکمه دانلود موجود در جدول بالا استفاده نمایید. در صورت نیاز به راهنمایی بیشتر، تیم پشتیبانی همراه شماست."
      />
    </div>
  );
};

export default Payments;
