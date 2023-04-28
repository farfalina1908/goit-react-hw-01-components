import PropTypes from 'prop-types';
import css from './Statistics.module.css';


export const Statistics = ({ title, stats}) => {
  return (
    <section className={css.statistics}>
      {title&&<h2 className={css.title}>Upload stats</h2>}

      <ul className={css.statList}>
        {stats.map(stat => (
           <li 
           style={{backgroundColor: getRandomColor()}}
           className={css.item} 
           key={stat.id} 
           >
          <span className={css.label}>{stat.label}</span>
          <span className={css.percentage}>{stat.percentage}%</span>
        </li>
        ))
        }      
      </ul>
    </section>
  );
}

function getRandomColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = 'rgb('+ x +','+ y +','+ z +')';
  return bgColor;
 }

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
         PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};