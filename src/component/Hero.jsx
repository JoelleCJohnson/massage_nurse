export default function Hero() {

    const handleButtonClick = () => {
        fetch('https://calendly.com/signup')
            .then(res => res.json())
            .then()
            .catch((err) => console.error(err))
    }


    return (
        <>
            <section>
                <h2>Schedule a massage now - you deserve it!</h2>
                    <img src={require('./images/massage.webp')} alt="" />
                <button onClick={() => handleButtonClick()}>Book Here</button>
            </section>
        </>
    )
}