import { TitleDashboard } from "@/components/dashboard/Title";
import Link from "next/link";
// import { useRouter } from "next/router";
export default function DashBoard() {
  // const router = useRouter();
  // const handlerRedirect = () => {
  //   router.push("/dashboard/resultado");
  // };
  return (
    <>
      <TitleDashboard />
      <nav>
        <ul>
          <li>
            <Link href="/dashboard/menu">Menu</Link>
          </li>
          <li>
            <Link href="/dashboard/historia">História</Link>
          </li>
          <li>
            <Link href="/dashboard/contato"> Contato</Link>
          </li>
        </ul>
      </nav>
      {/* <button onClick={() => router.push("/dashboard/resultado")}>Resultado</button> */}
    </>
  );
}
