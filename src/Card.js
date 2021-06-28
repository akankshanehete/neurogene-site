import "./Card.css";

const Card = () => {
    return (
        <>
            <div class="row">
            <div class="col-sm-6">
                <div class="card left-card shadow p-3 mb-5 bg-white rounded">
                <div class="card-body">
                    <h2 class="card-title">150K</h2>
                    <p class="card-text">FRDA sufferers around the globe</p>
                    
                </div>
                </div>
            </div>
            <div class="col-sm-6 ">
                <div class="card right-card shadow p-3 mb-5 bg-white rounded">
                <div class="card-body">
                    <h2 class="card-title">≤ 30 yrs</h2>
                    <p class="card-text">lifespan of serious FRDA sufferers</p>
                    
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Card;
