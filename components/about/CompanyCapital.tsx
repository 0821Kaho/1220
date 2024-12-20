export function CompanyCapital() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm">
            <div>
              <p className="text-sm font-medium text-neutral-600 mb-1">Company Capital</p>
              <p className="text-neutral-900 font-bold">4,000,000 Yen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}