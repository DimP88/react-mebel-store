import React, { useEffect, useState } from "react";
import Card from "../../../Components/Card/Card";
import api from "../../../config/api/api";
import SkeletonUI from "../../../pages/Skeleton/Skeleton";

const HitSale = () => {
  const [hitSale, setHitSale] = useState([]);
  const [limit, setLimit] = useState(8);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api(`products?_sort=sale&_order=desc&_limit=${limit}`)
      .json()
      .then((res) => {
        setHitSale(res);
        return api(
          `products?_sort=sale&_order=desc&_limit=1&_start=${limit}`
        ).json();
      })
      .then((checkRes) => {
        setHasMore(checkRes.length > 0);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [limit]);

  const loadMore = () => {
    setLimit((prev) => prev + 4);
  };

  return (
    <section className="hitsale">
      <div className="container">
        <h3 className="hitsale__title">Хиты продаж</h3>
        <div className="hitsale__row">
          {isLoading
            ? Array(6)
                .fill(0)
                .map((_, index) => <SkeletonUI key={`skeleton-${index}`} />)
            : hitSale.map((item) => (
                <React.Fragment key={item.id}>
                  <Card item={item} />
                </React.Fragment>
              ))}
        </div>
        {hasMore && (
          <button
            onClick={loadMore}
            className="hitsale__load-more catalog-btn"
            disabled={isLoading}
          >
            {isLoading ? "Загрузка..." : "Показать ещё"}
          </button>
        )}
      </div>
    </section>
  );
};

export default HitSale;
