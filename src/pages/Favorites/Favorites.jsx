import { Fragment, useContext, useEffect, useState, useMemo } from "react";
import { CustomContext } from "../../config/contex/CustomContext";
import Card from "../../Components/Card/Card";

const Favorites = () => {
  const { favorites } = useContext(CustomContext);

  const favoritesPages = useMemo(() => {
    return new Array(Math.ceil(favorites.length / 4)).fill(null);
  }, [favorites.length]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page > favoritesPages) {
      setPage(favoritesPages.length);
    }
  }, [favoritesPages, page]);

  return (
    <div className="container">
      <section className="favorites">
        {favorites.length ? (
          <h2 className="favorites__title">Избранные товары</h2>
        ) : (
          <h2 className="favorites__title">В избранном пока ничего нет...</h2>
        )}
        <div className="favorites__box">
          {favorites
            .filter(
              (_, index) => index + 1 <= 4 * page && index + 1 > 4 * page - 4
            )
            .map((item) => (
              <Fragment key={item.id}>
                <Card item={item} />
              </Fragment>
            ))}
        </div>
        {favoritesPages.length > 1 && (
          <ul className="favorites__pagination">
            {favoritesPages.map((item, index) => (
              <li
                onClick={() => setPage(index + 1)}
                key={index + 1}
                className={page === index + 1 ? "active" : ""}
              >
                {index + 1}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Favorites;
