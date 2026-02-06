import { Link } from "lucide-react";

const RandomLinks = () => {
  // Randomly selected 4 links from the provided list
  const links = [
    {
      name: "Attic Fan Repair Electrician Tempe",
      url: "https://atticfanrepairelectriciantempeaz.vercel.app/"
    },
    {
      name: "Boat Lift Electrician Fair Haven",
      url: "https://boatliftelectricianfairhavennj.vercel.app/"
    },
    {
      name: "Cheap Ceiling Fan Installation Spokane",
      url: "https://cheapceilingfaninstallationspokanew.vercel.app/"
    },
    {
      name: "Baseboard Heater Installation Seattle",
      url: "https://baseboardheaterinstallationseattlew.vercel.app/"
    }
  ];

  return (
    <section className="py-12 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">
            Related Services
          </h3>
          <p className="text-slate-600">
            Explore our network of specialized home service providers across the United States
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all duration-200 text-slate-700 hover:text-blue-600 font-medium"
            >
              <Link className="w-4 h-4" />
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RandomLinks;