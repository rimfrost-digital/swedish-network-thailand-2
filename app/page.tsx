export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="bg-[#0B1F3A] text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Svenska Företagare i Thailand
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Ett affärsdrivet nätverk för svenska företag och talanger med koppling till Thailand.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-[#FECB00] text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
              Lägg till företag
            </button>
            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#0B1F3A] transition">
              Gå med i Talangbanken
            </button>
          </div>
        </div>
      </section>

      {/* OM OSS */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Om nätverket</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Svenska Företagare i Thailand är ett affärsnätverk byggt av företagare,
            för företagare. Vi kopplar samman etablerade svenska bolag i Thailand
            med kompetenta talanger som förstår både svensk och thailändsk kultur.
          </p>
        </div>
      </section>

      {/* EVENTS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Kommande nätverksevent</h2>
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">Bangkok – 18 mars</h3>
            <p className="text-gray-600 mb-4">
              Fysiskt nätverksevent för svenska företagare i Thailand.
            </p>
            <button className="bg-[#0B1F3A] text-white px-5 py-2 rounded-lg hover:opacity-90">
              Läs mer
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0B1F3A] text-gray-400 py-10 px-6 text-center">
        © {new Date().getFullYear()} Svenska Företagare i Thailand
      </footer>

    </main>
  );
}
