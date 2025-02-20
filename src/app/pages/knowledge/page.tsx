import BreadCrumbs from "@/components/BreadCrumbs";

export default function Profile() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pt-12">
      <nav>
        <BreadCrumbs />
        <h1>Conocimiento</h1>
      </nav>
    </div>
  );
}
