const categories = [
    "ALL",
    "WEBSITE",
    "MOBILE APP",
    "E-COMMERCE",
    "ARTIFICIAL INTELLIGENCE",
    "INVOICE MANAGER",

  ];
  
  export default function CategoryFilter() {
    return (
      <div className="flex flex-wrap gap-4 py-8 px-6 bg-black text-white">
        {categories.map((category, index) => (
          <button
            key={index}
            className="uppercase font-bold text-sm hover:text-yellow-400 transition"
          >
            {category}
          </button>
        ))}
      </div>
    );
  }
  