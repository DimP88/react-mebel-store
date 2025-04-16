import { Fragment, useContext, useEffect, useState } from "react";
import api from "../../../src/config/api/api";
import Card from "../../Components/Card/Card";
import { CustomContext } from "../../config/contex/CustomContext";
import AsiderFilter from "../../Components/AsiderFilter.jsx/AsiderFilter";
import SkeletonUI from "../../pages/Skeleton/Skeleton";

const Catalog = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [slider, setSlider] = useState([0, 30000]);

  const { search } = useContext(CustomContext);

  useEffect(() => {
    setIsLoading(true);
    let queryParamsApi = `?${search.length ? `title_like=${search}&` : ""}${
      category.length ? `category=${category}&` : ""
    }${
      sort.length && sort !== "rate"
        ? `_sort=price&_order=${sort}&`
        : sort.length
        ? `_sort=rate&_order=desc&`
        : ""
    }`;
    let queryParamsFromTo = `price_gte=${slider[0]}&price_lte=${slider[1]}`;

    api(`products${queryParamsApi}${queryParamsFromTo}`)
      .json()
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [search, sort, category, slider]);

  return (
    <section className="catalog">
      <div className="container">
        <div className="catalog__row">
          <AsiderFilter
            category={category}
            setCategory={setCategory}
            sort={sort}
            setSort={setSort}
            setSlider={setSlider}
            slider={slider}
          />
          <div className="hitsale__row catalog__content">
            {isLoading
              ? Array(6)
                  .fill(0)
                  .map((_, index) => <SkeletonUI key={`skeleton-${index}`} />)
              : products.map((item) => (
                  <Fragment key={item.id}>
                    <Card item={item} />
                  </Fragment>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
