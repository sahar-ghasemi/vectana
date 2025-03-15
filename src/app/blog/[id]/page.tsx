export default function BlogPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div>
      <h1>مقاله با شناسه: {id}</h1>
      {/* اینجا می‌توانید محتوای مقاله را بارگذاری کنید */}
    </div>
  );
}
