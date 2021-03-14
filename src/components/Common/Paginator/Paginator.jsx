import React, {useState} from 'react';
import styles from './Paginator.module.css';

let Paginator = ({currentPage, totalItemsCount, onPageChanged, pageSize, portionSize,  ...props}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(Math.floor(currentPage / portionSize) + 1);
    let leftPortionPageNumber = (portionNumber - 1)*portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (

        <div>
            { portionNumber > 1 &&
            <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>
            }

            {
                pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                return (
                    <span className={p === currentPage ? `${styles.pageBox} ${styles.selected}`: styles.pageBox }
                          onClick={() => onPageChanged(p)}>{p}</span>
                )})
            }
            {portionCount > portionNumber &&
            <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>}
        </div>

    );
};

export default Paginator;