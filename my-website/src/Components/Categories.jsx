import { Link } from "react-router-dom";
import sneakers from "../assets/sneakers.jpg";
import tshirt from "../assets/tshirt.jpg";
import jacket from "../assets/jacket.jpg";
import perfume from "../assets/perfume.jpg";

const categoriesData = [
  {
    id: 1,
    title: "SNEAKERS",
    count: 10,
    image: sneakers,
    path: "/sneakers",
  },
  {
    id: 2,
    title: "T-SHIRTS",
    count: 10,
    image: tshirt,
    path: "/tshirts",
  },
  {
    id: 3,
    title: "JACKET",
    count: 10,
    image: jacket,
    path: "/jacket",
  },
  {
    id: 4,
    title: "PERFUME",
    count: 10,
    image: perfume,
    path: "/perfume",
  },
];

function Categories() {
  return (
    <section className="p-6">
      <h2 className="text-xl font-semibold mb-6 text-center">
        Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categoriesData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl text-center duration-300 hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-40 w-full object-cover rounded-t-2xl"
            />

            <div className="p-4">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-gray-500">({item.count})</p>

              
              <Link
                to={item.path}
                className="text-orange-600 font-semibold mt-2 inline-block hover:underline"
              >
                Show All →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;