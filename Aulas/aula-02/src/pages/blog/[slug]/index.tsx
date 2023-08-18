// É utilizado o useRouter para pegar o params.
import { useRouter } from "next/router";

export default function PostId() {
  const router = useRouter()
  return (
    <>
      <h2>Post Id:</h2>
      <div>My Post: {router.query.slug}</div>
    </>
  );
}
