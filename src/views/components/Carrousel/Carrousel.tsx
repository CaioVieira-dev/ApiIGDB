import { useEffect, useRef, useState } from "react";

type CarrouselProps = {
    games: CardInfo[];
}

type CardInfo = {
    title: string,
    thumb: string,
}


const Card = (props: CardInfo) => {
    return (
        <div className="card">
            <img className="thumb" src={props.thumb} alt="" />
            <div className="overlay">
                <p className="gameTitle">{props.title}</p>
            </div>
        </div>
    )
}

export function Carrousel(props: CarrouselProps) {
    const [index, setIndex] = useState([0, 6]);
    const carrouselRef = useRef<HTMLDivElement>(null);
    const controlLeft = useRef<HTMLDivElement>(null);
    const controlRight = useRef<HTMLDivElement>(null);

    const [games, setGames] = useState<CardInfo[]>(props.games)

    const maxCards = 9;

    const handleClick = (dir: number) => {
        console.log(index)
        if (dir === -1) {
            //to left

            setIndex([index[0] - 1, index[1] - 1])
            if (index[0] <= 0) {
                setIndex([0, 6])
            }
        }
        if (dir === 1) {
            //to left

            setIndex([index[0] + 1, index[1] + 1])
            if (index[1] >= maxCards) {
                setIndex([maxCards - 6, maxCards])
            }
        }

    }

    useEffect(() => {

        carrouselRef.current.style.transform = `translateX(-${(index[0] * 243) + (index[0] * 30)}px)`;

        if (index[0] === 0) {
            controlLeft.current.classList.add('disabled')
        } else {
            controlLeft.current.classList.remove('disabled')
        }

        if (index[1] === maxCards) {
            controlRight.current.classList.add('disabled')
        } else {
            controlRight.current.classList.remove('disabled')
        }

    }, [index]);


    return (
        <div className="carrousel">
            <div ref={controlLeft} onClick={() => handleClick(-1)} className="Control left"><img src="/images/arrowLeft.svg" alt="" /></div>
            <div ref={controlRight} onClick={() => handleClick(1)} className="Control right" ><img src="/images/arrowRight.svg" alt="" /></div>
            <div ref={carrouselRef} className="container">

                {games.map((games, i) => <Card key={i} title={games.title} thumb={games.thumb} />)}

            </div>

        </div>
    )
}