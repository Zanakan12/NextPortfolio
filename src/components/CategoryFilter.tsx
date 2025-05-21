interface CategoryFilterProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const categories = [
  "ALL",
  "WEBSITE",
  "MOBILE APP",
  "E-COMMERCE",
  "ARTIFICIAL INTELLIGENCE",
  "DESKTOP APP",
  "GAME",
];

export default function CategoryFilter({ activeCategory, setActiveCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-4 py-8 px-6 bg-black text-white-200 justify-center rounded-t-md border-b-white">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`uppercase font-bold text-sm transition ${activeCategory === category ? "text-blue-400" : "hover:text-blue-400"
            }`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>

      ))}
    </div>
  );
}
