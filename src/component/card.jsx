import cardLogo from "./boy.png";

export default function Card() {
    return (
        <div className="cards">
            <img src={cardLogo} className="card--image" />
            <div className="card--stats">
                
                <span>5.0</span>
                <span>(6) • </span>
                <span>USA</span>
            </div>
            <h2>Life Lessons with <br /> Katie Zaferes</h2>
            <p>From $136 / person</p>
        </div>
    )
}