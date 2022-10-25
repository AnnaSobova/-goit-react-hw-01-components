import css from '../Statistics/Statistics.module.css';
import PropTypes from "prop-types";

export const Statistics=({title,data})=>{
    return(
        <section className={css.statistics} key={title}>
        <h2 className={css.title}>{title}</h2>
      
        <ul className={css.itemList}>
        {data.map(({ id, label, percentage }) =>
                (<li style={{ backgroundColor: getRandomHexColor()}} 
                className={css.item} key={id} >
                    <span className={css.label} >{label}</span>
                    <span className={css.percentage}>{percentage}%</span>
                </li>)
                )}
        </ul>
      </section>
)
};

Statistics.propTypes={
    title: PropTypes.string.isRequired,
    data: PropTypes.exact({
        id:PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }  
