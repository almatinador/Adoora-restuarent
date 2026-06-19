import Image from "next/image";
import Image1 from "../../../public/assets/image1.jpg"
import Image2 from "../../../public/assets/image2.jpg"
import Image3 from "../../../public/assets/image3.jpg"

const featuredItems = [
    {
        id: 1,
        name: "Grilled Salmon",
        description:
            "Fresh Atlantic salmon grilled to perfection with seasonal vegetables.",
        price: "$24",
        image: "/assets/image1.jpg"
    },
    {
        id: 2,
        name: "Margherita Pizza",
        description:
            "Classic Italian pizza topped with fresh mozzarella and basil.",
        price: "$18",
        image: "/assets/image2.jpg"
    },
    {
        id: 3,
        name: "Beef Steak",
        description:
            "Premium beef steak served with garlic butter and roasted potatoes.",
        price: "$32",
        image: "/assets/image3.jpg"
    },
];

export default function FeaturedItems() {
    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="mx-auto mb-16 max-w-2xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-widest text-yellow-600">
                        Featured Dishes
                    </span>

                    <h2 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
                        Customer Favorites
                    </h2>

                    <p className="mt-4 text-lg text-gray-600">
                        Discover our most-loved dishes, crafted with premium ingredients
                        and unforgettable flavors.
                    </p>
                </div>

                {/* Featured Cards */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {featuredItems.map((item) => (
                        <div
                            key={item.id}
                            className="group overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            <div className="relative h-72 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="mb-3 flex items-center justify-between">
                                    <h3 className="text-xl font-bold text-gray-900">
                                        {item.name}
                                    </h3>

                                    <span className="font-bold text-yellow-600">
                                        {item.price}
                                    </span>
                                </div>

                                <p className="mb-5 text-gray-600">
                                    {item.description}
                                </p>

                                <button className="rounded-lg bg-yellow-500 px-5 py-3 font-medium text-black transition hover:bg-yellow-400">
                                    Order Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}