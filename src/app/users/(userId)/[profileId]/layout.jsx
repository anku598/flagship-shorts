import "../../../globals.css";
export default function ProfileIdLayout({ children }) {
  return (
    <section>
      <main className="flex text-body-color">
        <div className=" w-full">{children}</div>
      </main>
    </section>
  );
}
