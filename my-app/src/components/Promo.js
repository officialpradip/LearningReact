function Promo(props){
    return(
        <div className="promo-section">
            <div>
                <h1>{props.heading}</h1>
            </div>
            <h2>{props.promoSubHeading}</h2>

        </div>
    );
};

export default Promo;