"use client";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/purple.css";
import PayInfoList from "./PayInfoList";

interface FormValues {
  date: DateObject | null;
  amount: string;
}

export default function Example() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [submittedDate, setSubmittedDate] = useState<DateObject | null>(null);
  const [submittedAmount, setSubmittedAmount] = useState<string>("");

  const onSubmit: SubmitHandler<FormValues> = ({ date, amount }) => {
    setSubmittedDate(date);
    setSubmittedAmount(amount);
  };

  return (
    <div className="ml-20">
      <div className="grid grid-cols-1 gap-y-5 ">
        <div className="bg-theme-background-purple p-3 rounded-lg mt-10">
          <p className="font-semibold">نحوه خرید پنل انتخاب شده:</p>
          <p>
            مبلغ پنل انتخابی را به شماره کارت زیر واریز و در همین صفحه اطلاعات
            ان را ثبت بفرمائید
          </p>
          <p> 5859-3465-8374-4875</p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 mx-auto p-6 bg-white rounded-lg shadow-sm border
         border-gray-200 w-2/4"
        >
          {/* فیلد مبلغ */}
          <div className="mb-4">
            <label
              htmlFor="amount"
              className="block text-gray-700 font-semibold mb-2"
            >
              مبلغ (تومان)
            </label>
            <Controller
              control={control}
              name="amount"
              defaultValue=""
              rules={{ required: "لطفاً مبلغ را وارد کنید." }}
              render={({ field: { onChange, value } }) => (
                <input
                  type="text"
                  id="amount"
                  value={value}
                  onChange={onChange}
                  className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-2 focus:outline-theme-purple-default"
                  placeholder="50000 تومان"
                />
              )}
            />
            {errors?.amount && (
              <span className="text-red-500 text-sm">
                {errors.amount.message}
              </span>
            )}
          </div>

          {/* فیلد تاریخ */}
          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-gray-700 font-semibold mb-2"
            >
              تاریخ
            </label>
            <Controller
              control={control}
              name="date"
              rules={{ required: "لطفاً تاریخ را وارد کنید." }}
              render={({ field: { onChange, name, value } }) => (
                <div className="relative">
                  <DatePicker
                    value={value || ""}
                    onChange={(date: DateObject) => {
                      onChange(date?.isValid ? date : null);
                    }}
                    placeholder="انتخاب تاریخ واریز"
                    editable={false}
                    hideOnScroll
                    className="purple"
                    calendar={persian}
                    locale={persian_fa}
                    calendarPosition="bottom-right"
                    style={{
                      height: "50px", // ارتفاع مشابه به فیلد مبلغ
                      fontSize: "14px", // اندازه فونت مشابه
                      padding: "3px 10px", // پدینگ مشابه به فیلد مبلغ
                    }}
                  />
                </div>
              )}
            />
            {errors?.date && (
              <span className="text-red-500 text-sm">
                {errors.date.message}
              </span>
            )}
          </div>

          {/* دکمه ارسال */}
          <button
            type="submit"
            className="text-white bg-gradient-to-br
          from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
          hover:cursor-pointer"
          >
            ارسال
          </button>
        </form>

        {/* نمایش اطلاعات ارسال شده */}
        {submittedDate && (
          <div className="mt-6 max-w-md mx-auto text-center">
            <p className="text-green-500 font-semibold">
              تاریخ ارسال شده: {submittedDate.format("D MMMM YYYY")}
            </p>
            <p className="text-green-500 font-semibold mt-2">
              مبلغ ارسال شده: {submittedAmount} تومان
            </p>
          </div>
        )}
      </div>
      {/* Payments list */}
      <PayInfoList />
    </div>
  );
}
