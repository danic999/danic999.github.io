import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">O nama</h1>
                        <p className="lead mb-4">
                        Dobrodošli na web stranicu naše tvrtke, koja se specijalizira za prodaju gaming stolica na području Balkana. Naša tvrtka nudi širok izbor kvalitetnih gaming stolica koje će vam pomoći da poboljšate vašu gaming izvedbu i udobnost.

Svjesni smo koliko je bitna ergonomija pri dugim satima sjedenja ispred ekrana te smo zbog toga odlučili ponuditi samo najbolje gaming stolice za naše kupce. Naš asortiman uključuje stolice poznatih brandova, koji su svjetski poznati po kvaliteti i trajnosti.

Naša misija je pružiti najbolju uslugu i brzu dostavu, te omogućiti da svaki naš kupac bude zadovoljan sa svojom kupnjom. Također nudimo mogućnost plaćanja karticama, gotovinom, PayPal-om i bankovnim transferom.

Za sve kupce koji žele dodatne informacije ili savjete pri odabiru gaming stolice, naš stručni tim je tu da vam pomogne. Naši stručnjaci su vrlo dobro upoznati s našim proizvodima i pomoći će vam odabrati najbolju gaming stolicu za vaše potrebe.

Uz našu bogatu ponudu i izvrsnu uslugu, sigurni smo da ćete pronaći savršenu gaming stolicu za sebe. Zahvaljujemo vam na posjeti našoj web stranici i veselimo se vašoj kupnji.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Kontaktirajte nas</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/inzinjer.avif" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
