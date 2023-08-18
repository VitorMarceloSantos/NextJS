export default function PostId({ params }: { params: { slug: string } }) {
  return (
    <>
      <h2>Post Id:</h2>
      <div>My Post: {params.slug}</div>
    </>
  );
}
