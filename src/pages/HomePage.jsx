import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "@/components/product/ProductCard";
import { convertCurrency, formatCurrency } from "@/utils/utilities";
import ShimmerCard from "@/components/product/ShimmerCard";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    setError(null);

    const url = "https://fakestoreapi.com/products";

    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setError(`Failed to fetch data. Please try again later. ${error}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="px-5 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
      {loading
        ? Array.from({ length: 15 }, (_, i) => <ShimmerCard key={i} />)
        : data.map((product) => {
            const convertedCurrency = convertCurrency(product.price);
            const formattedCurrency = formatCurrency(convertedCurrency);

            return (
              <ProductCard
                key={product.id}
                productTitle={product.title}
                productPrice={formattedCurrency}
                productImage={product.image}
              />
            );
          })}
    </div>
  );
};

export default HomePage;
