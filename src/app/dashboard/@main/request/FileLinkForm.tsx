"use client";

import { useState } from "react";

const FileLinkForm: React.FC = () => {
  const [fileLink, setFileLink] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFileLink(event.target.value);
  };

  // تابع برای ارسال لینک فایل
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (fileLink) {
      // اینجا می‌توانید برای ارسال لینک به سرور یا ذخیره‌سازی آن اقدام کنید
      console.log("لینک فایل ارسال شد: ", fileLink);
      setSubmitted(true);
    } else {
      alert("لطفاً یک لینک معتبر وارد کنید.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 my-6 w-full">
      <h3 className="text-xl font-semibold mb-4 text-gray-700">
        ارسال درخواست
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fileLink" className="block text-gray-700">
            لینک فایل:
          </label>
          <input
            type="url"
            id="fileLink"
            value={fileLink}
            onChange={handleInputChange}
            placeholder="https://example.com/file.zip"
            className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-2 focus:outline-theme-purple-default"
            required
            style={{ direction: "ltr" }}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-gradient-to-br
           from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
           hover:cursor-pointer"
        >
          ثبت
        </button>
      </form>

      {submitted && (
        <p className="mt-4 text-green-500 text-center">
          لینک فایل با موفقیت ارسال شد!
        </p>
      )}
    </div>
  );
};

export default FileLinkForm;
