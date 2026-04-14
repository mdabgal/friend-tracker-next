import Banner from "@/components/Banner";
import Friends from "@/components/Friends";

export default async function Home() {
  const res = await fetch("http://localhost:3000/data.json", {
    cache: "no-store",
  });

  const friends = await res.json(); // ✅ define করা হলো

  return (
    <main>
      <Banner />
      <Friends friends={friends} />
    </main>
  );
}