import "../../../globals.css";
export default function ProfileIdLayout({ children }) {
  return (
    <section>
      <main className="flex text-body-color pb-20">
        <div className=" w-full">{children}</div>
      </main>
    </section>
  );
}
