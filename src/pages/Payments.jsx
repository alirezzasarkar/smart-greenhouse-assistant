import React from "react";

const payments = [
  { date: "1404/02/14", status: "موفق", amount: "130,000 تومان" },
  { date: "1404/02/14", status: "موفق", amount: "130,000 تومان" },
  { date: "1404/02/14", status: "موفق", amount: "130,000 تومان" },
  { date: "1404/02/14", status: "موفق", amount: "130,000 تومان" },
  { date: "1404/02/14", status: "موفق", amount: "130,000 تومان" },
];

const Payments = () => {
  return (
    <div className="p-4">
      <h1 className="text-lg font-bold text-center mb-10">لیست پرداخت ها</h1>
      <div className="bg-white rounded-2xl bg-menu py-4 px-3 mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-center">
            <thead>
              <tr className="bg-menu text-color">
                <th className="py-2 px-2">تاریخ</th>
                <th className="py-2 px-2">وضعیت</th>
                <th className="py-2 px-2">مبلغ</th>
                <th className="py-2 px-2">چاپ رسید</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((p, idx) => (
                <tr
                  key={idx}
                  className="border-b last:border-b-0 border-gray-300"
                >
                  <td className="py-6 px-2">{p.date}</td>
                  <td className="py-6 px-2 text-green-600">{p.status}</td>
                  <td className="py-6 px-2">{p.amount}</td>
                  <td className="py-6 px-2">
                    <button className="bg-green-50 border border-green-500 text-green-600 rounded-4xl px-4 py-1 text-xs flex items-center gap-1 hover:bg-green-100 transition-colors">
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M12.667 2.667H11.333V1.333A.667.667 0 0010.667.667H5.333a.667.667 0 00-.666.666v1.334H3.333A1.333 1.333 0 002 4v9.333A1.333 1.333 0 003.333 14.667h9.334A1.333 1.333 0 0014 13.333V4a1.333 1.333 0 00-1.333-1.333zM5.333 1.333h5.334v1.334H5.333V1.333zm7.334 12A.667.667 0 0112 14H4a.667.667 0 01-.667-.667V4a.667.667 0 01.667-.667h8A.667.667 0 0113.333 4v9.333z"
                          fill="#16A34A"
                        />
                      </svg>
                      دانلود
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <h2 className="text-base font-semibold mb-3  text-right">
        تاریخچه پرداخت های شما
      </h2>
      <p className="text-xs text-gray-500 leading-relaxed text-right">
        در این بخش می‌توانید تمامی تراکنش‌های خود را مشاهده، فیلتر و مدیریت
        کنید. برای دانلود رسید هر تراکنش، بر روی دکمه دانلود در جدول بالا
        استفاده کنید. در صورت نیاز به راهنمایی بیشتر، پشتیبانی در تماس است.
      </p>
    </div>
  );
};

export default Payments;
