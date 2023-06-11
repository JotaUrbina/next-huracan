import HuracanPack from "@/components/asset components/HuracanPack";
import "./hero.scss";
import HeroButton from "@/components/HeroButton/HeroButton";

export default function Home() {
  return (
    <main className="w-screen h-screen grid grid-rows-2 md:grid-rows-none md:grid-cols-2">
      <section className="hn-3sp flex justify-center py-10">
        <HeroButton txt="HN 3SP" link="gallery/3sp" />
      </section>
      <section className="hn-88 flex justify-center py-10">
        <HeroButton txt="HN 88" link="gallery/88" />
      </section>
      <HuracanPack />
    </main>
  );
}
