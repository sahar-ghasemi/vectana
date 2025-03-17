"use client";

interface FileRequest {
  link: string;
  status: string;
  date: string;
}

const RequestList: React.FC = () => {
  const requests: FileRequest[] = [
    {
      link: "https://example.com/file1.zip",
      status: "آماده دانلود",
      date: "2025-03-16",
    },
    {
      link: "https://example.com/file2.zip",
      status: "آماده دانلود",
      date: "2025-03-17",
    },

    {
      link: "https://example.com/file1.zip",
      status: "در حال انجام",
      date: "2025-03-16",
    },
    {
      link: "https://example.com/file3.zip",
      status: "خطا",
      date: "2025-03-18",
    },
  ];

  const handleDownload = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 my-6 w-full">
      <h3 className="text-xl font-semibold mb-4 text-gray-700">
        لیست لینک‌های درخواستی
      </h3>

      <table className="w-full table-auto text-sm text-gray-600">
        <thead>
          <tr>
            <th className="px-4 py-2 text-right">لینک</th>
            <th className="px-4 py-2 text-right">وضعیت</th>
            <th className="px-4 py-2 text-right">تاریخ ثبت</th>
            <th className="px-4 py-2 text-right">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr key={index} className="border-t border-gray-200">
              <td className="px-4 py-2">{request.link}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 rounded-lg ${
                    request.status === "آماده دانلود"
                      ? "bg-green-500 text-white"
                      : request.status === "در حال انجام"
                      ? "bg-yellow-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {request.status}
                </span>
              </td>
              <td className="px-4 py-2">{request.date}</td>
              <td className="px-4 py-2">
                {request.status === "آماده دانلود" && (
                  <button
                    onClick={() => handleDownload(request.link)}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-6 
                    rounded-lg hover:cursor-pointer transform transition
                     duration-500 ease-in-out shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-gradient-to-l"
                  >
                    دانلود
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestList;
