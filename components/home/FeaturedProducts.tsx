import { fetchFeaturedProducts } from "@/utils/actions";

import ProductsGrid from "@/components/products/ProductsGrid";
import SectionTile from "@/components/global/SectionTile";
import EmptyList from "@/components/global/EmptyList";

async function FeaturedProducts() {
  const products = await fetchFeaturedProducts();
  if (products.length === 0) return <EmptyList />;

  return (
    <section className="pt-20">
      <SectionTile text="featured products" />
      <ProductsGrid products={products} />
    </section>
  );
}

export default FeaturedProducts;
