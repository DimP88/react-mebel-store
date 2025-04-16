import FilterSelect from "../FilterSelect/FilterSelect";
import RangeSlider from "./RangeFilter";

const AsiderFilter = ({
  sort,
  setSort,
  category,
  setCategory,
  slider,
  setSlider,
}) => {
  const getResetValue = () => {
    setSort("");
    setCategory("");
    setSlider([0, 30000]);
  };

  return (
    <aside className="catalog__aside">
      <div className="catalog__aside-content">
        <h2 className="catalog__aside-title">Раздел </h2>
        <FilterSelect
          title="Категория"
          state={category}
          setState={setCategory}
          array={[
            "Барные стулья",
            "Диваны",
            "Двуспальные кровати",
            "Буфеты",
            "Комоды",
            "Журнальные столы",
            "Письменные столы",
            "Шкафы",
            "Детский диван",
          ]}
        />
        <FilterSelect
          title="Сортировать"
          state={sort}
          setState={setSort}
          array={["asc", "desc", "rate"]}
        />
        <RangeSlider slider={slider} setSlider={setSlider} />
        <div className="catalog__aside-prices">
          <div className="catalog__aside-price">{slider[0]} грн.</div>-
          <div className="catalog__aside-price">{slider[1]} грн.</div>
        </div>
        <button className="catalog__aside-btb" onClick={getResetValue}>
          Сбросить
        </button>
      </div>
    </aside>
  );
};

export default AsiderFilter;
