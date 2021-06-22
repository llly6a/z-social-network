import React, { useState } from 'react'
import s from './Paginator.module.css'

type PropsType = {
    currentPage: number,
    entitiesCount: number,
    pageSize: number,
    buttonsCount:number,
    onPageChanged: (newPage: number) => void
}

const Paginator:React.FC<PropsType> = ({currentPage, entitiesCount, pageSize , buttonsCount , onPageChanged}) => {
    let [portion, setPortion] = useState(0);
    let pagesCount = Math.ceil(entitiesCount / pageSize);
    let maxPortions = Math.floor(pagesCount / buttonsCount);

    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const onChangePortionClick = (i:number) => {
        setPortion(portion + i);
    }

    return (
        <div className={`${s.pages} ${s.noselect}`}>
            {portion > 0 && <span className={`${s.previus} ${s.pagesButton}`} onClick={() => onChangePortionClick(-1)}/>}
            {pages.filter(p => p > portion * buttonsCount && p <= portion * buttonsCount + buttonsCount).map(p => {
                return <span key={p}
                    className={currentPage === p ? `${s.selectedPage} ${s.pageNumber}` : `${s.pageNumber}`}
                    onClick={() => { onPageChanged(p) }}>{p}</span>
            })}
            {portion < maxPortions && <span className={`${s.foward} ${s.pagesButton}`} onClick={() => onChangePortionClick(1)}/>}
        </div>
    )
}

export default Paginator;