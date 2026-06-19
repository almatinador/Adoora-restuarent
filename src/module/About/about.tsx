import Image from "next/image";
import AboutImage from "../../../public/assets/aboutimage.jpg"


export default function About() {
    return (
        <section className="bg-[#F9F6F1] py-24">
            <div className="container mx-auto px-6">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Image */}
                    <div className="relative">
                        <div className="overflow-hidden rounded-2xl">
                            <Image
                                src={AboutImage}
                                alt="Restaurant Interior"
                                width={600}
                                height={700}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="absolute -bottom-6 -right-6 rounded-xl bg-yellow-500 p-6 shadow-xl">
                            <h3 className="text-3xl font-bold text-black">15+</h3>
                            <p className="font-medium text-black">
                                Years of Excellence
                            </p>
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-yellow-600">
                            About Us
                        </span>

                        <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
                            A Culinary Journey of
                            <span className="block text-yellow-600">
                                Passion & Flavor
                            </span>
                        </h2>

                        <p className="mb-6 text-lg leading-relaxed text-gray-600">
                            Since our founding, we have been dedicated to creating
                            unforgettable dining experiences through exceptional food,
                            warm hospitality, and an elegant atmosphere.
                        </p>

                        <p className="mb-8 text-lg leading-relaxed text-gray-600">
                            Our chefs carefully select the freshest ingredients and
                            transform them into signature dishes that celebrate both
                            tradition and innovation. Every meal is crafted with
                            passion, precision, and creativity.
                        </p>

                        {/* Features */}
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="rounded-xl bg-white p-5 shadow-md">
                                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                                    Fresh Ingredients
                                </h3>
                                <p className="text-gray-600">
                                    Locally sourced ingredients prepared daily.
                                </p>
                            </div>

                            <div className="rounded-xl bg-white p-5 shadow-md">
                                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                                    Expert Chefs
                                </h3>
                                <p className="text-gray-600">
                                    Skilled chefs delivering world-class cuisine.
                                </p>
                            </div>

                            <div className="rounded-xl bg-white p-5 shadow-md">
                                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                                    Premium Dining
                                </h3>
                                <p className="text-gray-600">
                                    Elegant atmosphere for memorable moments.
                                </p>
                            </div>

                            <div className="rounded-xl bg-white p-5 shadow-md">
                                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                                    Quality Service
                                </h3>
                                <p className="text-gray-600">
                                    Exceptional hospitality with every visit.
                                </p>
                            </div>
                        </div>

                        <button className="mt-8 rounded-lg bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:bg-yellow-400">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}