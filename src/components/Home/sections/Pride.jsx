import foodimg from '../../../assets/chicken-skewers-with-slices-sweet-peppers-dill.jpg'

export default function Pride(){
    return(
        <section className="pride" id='pride'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={foodimg} alt="Food" />
                    </div>
                    <div className="col-md-6">
                        <h2>We pride ourselves on making real food from the best intredients.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquam at, tempora sapiente doloremque repudiandae reprehenderit expedita sed beatae ad. Temporibus, necessitatibus veritatis corporis ipsam voluptatum autem aut asperiores reprehenderit.</p>
                        <button><a href="#">Learn More</a></button>
                    </div>
                </div>
            </div>
        </section>
    )
}