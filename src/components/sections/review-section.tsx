'use client';
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import data from '../data/data.json';
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { BRAND } from "../data/constants";

export const ReviewsSection = () => {

    const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 3;
  
  const totalPages = Math.ceil(data.reviews.length / reviewsPerPage);
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const currentReviews = data.reviews.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Smooth scroll to top of reviews section
    document.getElementById('reviews-section')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-white via-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-medium text-red-600 uppercase tracking-widest">Reviews</p>
          <h2 className="text-5xl md:text-6xl font-light text-black leading-tight">
            Client <span className="text-orange-600">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover what our clients say about their experience with {BRAND.NAME}. 
            Each review reflects our commitment to excellence and personalized service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentReviews.map((review) => (
            <Card key={review.id} className="group hover:shadow-xl transition-all duration-500 border border-orange-100 hover:border-red-200 hover:-translate-y-2 bg-white">
              <CardContent className="px-8 py-4">
                <div className="flex items-center mb-6">
                  <div>
                    <h3 className="font-medium text-black">{review.name}</h3>
                    <div className="flex items-center mt-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-red-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  &quot;{review.comment}&quot;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* pagination */}
          {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                  size={'sm'}
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) handlePageChange(currentPage - 1);
                    }}
                    className={currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}
                  />
                </PaginationItem>
                
                {[...Array(totalPages)].map((_, index) => {
                  const page = index + 1;
                  return (
                    <PaginationItem key={page}>
                      <PaginationLink
                       size={'sm'}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(page);
                        }}
                        isActive={currentPage === page}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}
                
                <PaginationItem>
                  <PaginationNext 
                  size={'sm'}
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages) handlePageChange(currentPage + 1);
                    }}
                    className={currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}

        {/* Overall Rating Summary */}
        <div className="text-center mt-16 p-8 bg-white rounded-2xl shadow-lg border border-orange-100">
          <div className="flex items-center justify-center mb-4">
            <div className="text-4xl font-light text-red-600 mr-4">5.0</div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-red-500 fill-current" />
              ))}
            </div>
          </div>
          <p className="text-lg text-gray-700">
            Based on <span className="font-medium text-red-600">{data.about.highlights.clientsServed}+</span> client reviews
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Join our satisfied clients and experience exceptional tailoring
          </p>
        </div>
      </div>
    </section>
  );
};