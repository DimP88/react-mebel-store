import { useParams } from "react-router-dom";
import ProductInfo from "../../Components/ProductInfo/ProductInfo";
import ProductSlider from "../../Components/ProductSlider/ProductSlider";
import { useEffect, useState } from "react";
import api from "../../config/api/api";
import HitSale from "../Home/HitSale/HitSale";

const Product = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    api(`products/${id}`)
      .json()
      .then((res) => setProduct(res));
  }, [id]);

  if ("id" in product) {
    return (
      <>
        <section className="product">
          <div className="container">
            <ProductSlider images={product.images} />
            <ProductInfo product={product} />
            <HitSale />
          </div>
        </section>
      </>
    );
  } else return <h2>Loading....</h2>;
};

export default Product;
