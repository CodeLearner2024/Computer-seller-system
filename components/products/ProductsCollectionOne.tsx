import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { productsData } from "@/data/products/productsData";

import React from "react";
import SingleProductCartView from "../product/SingleProductCartView";

const ProductsCollectionOne = () => {
  //get products data from server here based on the category or tab value
  const data = productsData;

  return (
    <section className="max-w-screen-2xl mx-auto py-16 px-4 md:px-8 w-full">
      <Tabs defaultValue="top-rated" className="w-full space-y-8 mx-0">
        <div className="flex items-center flex-col md:flex-row justify-between gap-2 flex-wrap w-full">
          <h2 className="text-2xl md:text-5xl font-semibold border-l-4 border-l-rose-500 p-2">Featured Products</h2>
          <TabsList className="font-semibold bg-transparent text-center">
            <TabsTrigger value="top-rated" className="md:text-xl">
              Top Rated
            </TabsTrigger>
            <TabsTrigger value="most-popular" className="md:text-xl">
              Most Popular
            </TabsTrigger>
            <TabsTrigger value="new-items" className="md:text-xl">
              New Items
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="top-rated" className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {data.map((product) => {
              return <SingleProductCartView key={product.id} {...product} />;
            })}
          </div>
        </TabsContent>
        <TabsContent value="most-popular">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((product) => {
              return <SingleProductCartView key={product.id} {...product} />;
            })}
          </div>
        </TabsContent>
        <TabsContent value="new-items">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((product) => {
              return <SingleProductCartView key={product.id} {...product} />;
            })}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default ProductsCollectionOne;
