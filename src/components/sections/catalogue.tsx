'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import data from '../data/data.json';
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ShareButton } from "../share";

const Catalogue = () => {
//   const { category } = useParams();
  const searchParams = useSearchParams();
  // const [favorites, setFavorites] = useState<number[]>([]);
  const category = searchParams.get("category")?.toLowerCase();

  const categoryDesigns = data.categories.designs.filter(design => design.category === searchParams.get("category") as string);

  // const toggleFavorite = (id: number) => {
  //   setFavorites(prev => 
  //     prev.includes(id) 
  //       ? prev.filter(fav => fav !== id)
  //       : [...prev, id]
  //   );
  // };

  const getCategoryTitle = (cat: string) => {
    switch(cat) {
      case 'formal': return 'Formal Collection';
      case 'business': return 'Business Collection';
      case 'wedding': return 'Wedding Collection';
      case 'casual': return 'Casual Collection';
      default: return 'Collection';
    }
  };

  const getCategoryDescription = (cat: string) => {
    switch(cat) {
      case 'suits': return 'Exquisite formal wear for your most important occasions';
      case 'kaftan': return 'Professional attire that commands respect and confidence';
      case 'agbada': return 'Professional attire that commands respect and confidence';
      case 'african prints (ankara)': return 'Elegant & casual wear for everyday sophistication';
      case 'casual wears' : return 'Casual comfort for every day Wear'
      default: return 'Discover our curated collection';
    }
  };

  if (!category || categoryDesigns.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-red-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-black mb-4">Category Not Found</h1>
          <Link href="/">
            <Button className="bg-gradient-to-r from-red-500 to-orange-500 text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-red-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-black via-red-900 to-black text-white pt-8 pb-14">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center text-sm text-orange-300 hover:text-white transition-colors mb-8">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <h1 className="text-5xl font-light leading-tight mb-6">
              {getCategoryTitle(category.toLowerCase())}
            </h1>
            <p className="text-lg text-orange-200 max-w-2xl mx-auto leading-relaxed">
              {getCategoryDescription(category.toLowerCase())}
            </p>
            <div className="mt-8">
              <span className="inline-block bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-medium">
                Over {'5+'} Designs Available
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Catalogue Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categoryDesigns.map((design, index) => (
               design.image.map((image, imgIndex) => 
                <div className="relative aspect-[3/4] overflow-hidden"
                key={`${index}-${imgIndex}`}>
                    <img 
                    src={image} 
                    alt={design.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-5 right-5">
                      <ShareButton useText={false}/>
                    </div>
                </div>
            )))}
           
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-black via-red-900 to-black text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
            Ready to Create Your
            <span className="block text-orange-400">Perfect Garment?</span>
          </h2>
          <p className="text-xl text-orange-200 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your vision and bring it to life with our expert craftsmanship.
          </p>
          {/* <Button 
            size="lg" 
            className="bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600 px-8 py-4 text-sm font-medium rounded-full transition-all duration-300 hover:scale-105">
            Schedule Consultation
          </Button> */}
          <ShareButton className="border border-none bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600 px-8 py-4 text-xs font-medium rounded-full"/>
        </div>
      </section>
    </div>
  );
};

export default Catalogue;

 {/* //   <div key={design.id} className="group cursor-pointer">
            //     <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-orange-100 overflow-hidden">
            //       <div className="relative aspect-[3/4] overflow-hidden">
            //         <img 
            //           src={image} 
            //           alt={design.title}
            //           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            //         />
                    
            //      
            //         <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            //           <div className="flex gap-3">
            //             <button 
            //               onClick={() => toggleFavorite(design.id)}
            //               className={`p-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${
            //                 favorites.includes(design.id) 
            //                   ? 'bg-red-500 border-red-500 text-white' 
            //                   : 'bg-white/20 border-white/30 text-white hover:bg-white/30'
            //               }`}
            //             >
            //               <Heart className={`h-5 w-5 ${favorites.includes(design.id) ? 'fill-current' : ''}`} />
            //             </button>
            //             <button className="p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300">
            //               <Eye className="h-5 w-5" />
            //             </button>
            //           </div>
            //         </div>

            //         
            //         <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
            //           {design.price}
            //         </div>
            //       </div>
                  
            //       <div className="p-6">
            //         <h3 className="text-xl font-medium text-black mb-2">{design.title}</h3>
            //         <p className="text-gray-600 text-sm leading-relaxed mb-4">{design.description}</p>
            //         <div className="flex justify-between items-center">
            //           <span className="text-red-600 font-medium text-lg">{design.price}</span>
            //           <Button 
            //             size="sm"
            //             className="bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600"
            //           >
            //             Inquire
            //           </Button>
            //         </div>
            //       </div>
            //     </div>
            //   </div> */}