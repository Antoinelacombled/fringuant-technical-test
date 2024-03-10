import "./CardRightSide.css";

function CardRightSide() {

    return (
        <div className='row' style={{
            position: 'absolute',
            top: `250vh`,
            right: '0',
            color: "white",
            width: '100%',
            paddingRight: '40px',
            boxSizing: 'border-box'
        }}>
            <div style={{ maxWidth: '440px', marginLeft: 'auto' }}>
                <h2>Tech-Savvy Side</h2>
                <p>Featuring a sleek, metallic design inspired by advanced technology, this aftershave bottle is as stylish as it is functional. But it's not just a pretty face - inside, you'll find a nourishing and protective aftershave formula that will leave your skin feeling refreshed and hydrated.</p>
                <button>Read more</button>
            </div>
        </div>
    );
}

export default CardRightSide;
