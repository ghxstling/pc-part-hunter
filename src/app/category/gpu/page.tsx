import ProductSection from "@/components/product-section";
import React from "react";
import CategoryLayout from "../[...slug]/layout";

const styles = {
  card: "w-full h-2xl",
};

export default async function Page() {
  return (
    <CategoryLayout>
      <div className="flex flex-col gap-12 w-[70vw] max-w-[100rem]">
        <ProductSection title="NVIDIA GPUs" className={styles.card}>
          <div className="grid grid-cols-4 gap-4 justify-items-center">
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
          </div>
        </ProductSection>
        <ProductSection title="AMD GPUs" className={styles.card}>
          <div className="grid grid-cols-4 gap-4 justify-items-center">
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
          </div>
        </ProductSection>
        <ProductSection title="Intel GPUs" className={styles.card}>
          <div className="grid grid-cols-4 gap-4 justify-items-center">
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
          </div>
        </ProductSection>
      </div>
    </CategoryLayout>
  );
}
