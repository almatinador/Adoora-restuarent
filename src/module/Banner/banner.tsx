import Image from "next/image";
import BannerImage from "../../../public/assets/bannerimage.jpg"
export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={BannerImage}
                    alt="Restaurant Hero"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6">
                <div className="max-w-3xl text-white">
                    <span className="inline-block mb-4 rounded-full border border-yellow-500 px-4 py-2 text-sm font-medium text-yellow-400">
                        Welcome to Taste Haven
                    </span>

                    <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
                        Experience Fine Dining
                        <span className="block text-yellow-400">
                            Like Never Before
                        </span>
                    </h1>

                    <p className="mb-8 max-w-2xl text-lg text-gray-300 md:text-xl">
                        Discover exquisite flavors crafted by world-class chefs.
                        Enjoy a memorable dining experience with fresh ingredients,
                        elegant ambiance, and exceptional service.
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row">
                        <button className="rounded-lg bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:bg-yellow-400">
                            View Menu
                        </button>

                        <button className="rounded-lg border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black">
                            Reserve a Table
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="mt-12 flex flex-wrap gap-8">
                        <div>
                            <h3 className="text-3xl font-bold text-yellow-400">15+</h3>
                            <p className="text-gray-300">Years Experience</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-yellow-400">50K+</h3>
                            <p className="text-gray-300">Happy Customers</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-yellow-400">100+</h3>
                            <p className="text-gray-300">Signature Dishes</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}