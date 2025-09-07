import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  category: string;
}

// Mock product data
const products: Product[] = [
  {
    id: 1,
    name: "Premium Leather Jacket",
    price: 299,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 124,
    badge: "Sale",
    category: "Outerwear"
  },
  {
    id: 2,
    name: "Classic White Sneakers",
    price: 129,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 89,
    badge: "Bestseller",
    category: "Footwear"
  },
  {
    id: 3,
    name: "Minimalist Watch",
    price: 199,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 203,
    badge: "New",
    category: "Accessories"
  },
  {
    id: 4,
    name: "Designer Sunglasses",
    price: 159,
    originalPrice: 199,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 67,
    category: "Accessories"
  },
  {
    id: 5,
    name: "Silk Dress Shirt",
    price: 89,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 156,
    category: "Clothing"
  },
  {
    id: 6,
    name: "Canvas Backpack",
    price: 79,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 94,
    badge: "Eco-Friendly",
    category: "Bags"
  }
];

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-elegant-sm hover:shadow-elegant-md transition-all duration-300 bg-gradient-card">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badge */}
        {product.badge && (
          <Badge className={`absolute top-3 left-3 ${
            product.badge === 'Sale' 
              ? 'bg-destructive text-destructive-foreground' 
              : product.badge === 'New'
              ? 'bg-success text-success-foreground'
              : 'bg-secondary text-secondary-foreground'
          }`}>
            {product.badge}
          </Badge>
        )}

        {/* Action buttons */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="icon" variant="secondary" className="w-8 h-8 shadow-elegant-sm">
            <Heart className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="secondary" className="w-8 h-8 shadow-elegant-sm">
            <Eye className="h-4 w-4" />
          </Button>
        </div>

        {/* Quick add to cart */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <Button className="w-full bg-secondary hover:bg-secondary-hover text-secondary-foreground">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">{product.category}</p>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          
          <div className="flex items-center space-x-1">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  className={`h-3 w-3 ${
                    star <= Math.floor(product.rating) 
                      ? 'fill-secondary text-secondary' 
                      : 'fill-gray-200 text-gray-200'
                  }`} 
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({product.reviews})</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-foreground">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ProductGrid = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium products, crafted with excellence and designed to elevate your style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;