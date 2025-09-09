'use client';
import { useState } from "react";
import data from '../data/data.json';
import Link from "next/link";

export const GallerySection = () => {   
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredDesigns = selectedCategory.toLowerCase() === "all" 
    ? data.categories.designs 
    : data.categories.designs.filter(design => design.category.toLowerCase() === selectedCategory.toLowerCase());

    //design.image.some(img => img.toLowerCase().includes(selectedCategory.toLowerCase()))

    return(
        <div>
            {/* Gallery Section */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">Portfolio</p>
                    <h2 className="text-5xl md:text-6xl font-light text-slate-900 leading-tight">
                    Our Creations
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                    Each piece in our collection represents a unique story of craftsmanship, 
                    attention to detail, and artistic vision.
                    </p>
                </div>

                {/* Modern Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {data.categories.tags.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize ${
                        selectedCategory === category 
                            ? "bg-slate-900 text-orange-500 shadow-lg scale-105" 
                            : "bg-white text-orange-800 hover:bg-slate-50 border border-slate-200 hover:border-slate-300"
                        }`}
                    >
                        {category}
                    </button>
                    ))}
                </div>

            {/* Modern Design Gallery */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredDesigns.map((design) => (
                <Link href={`/catalogue?category=${design.category}`} key={design.id} className="group">
                    <div key={design.id} className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                        <div className="aspect-[3/4] overflow-hidden">
                            <img 
                            src={design.image[0]} 
                            alt={design.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white ">
                            <h3 className="text-xl font-medium mb-1">{design.title}</h3>
                            <p className="text-sm opacity-90 capitalize font-light">{design.category} Collection</p>
                        </div>
                        </div>
                    </div>
                </Link>
                ))}
            </div>
            </div>
            </section>

        </div>
    );
}