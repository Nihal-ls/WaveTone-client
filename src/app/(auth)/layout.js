export default function AuthLayout({ children }) {
  return (
    <section className="min-h-screen bg-base-100 flex flex-col items-center justify-center">
      {children}
    </section>
  );
}