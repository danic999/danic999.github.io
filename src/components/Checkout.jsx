import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {
    const state = useSelector((state) => state.addItem)

    var total = 0;
    const itemList = (item) => {
        total = total + item.price;
        return (
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">{item.title}</h6>
                </div>
                <span className="text-muted">{item.price} BAM</span>
            </li>
        );
    }

    return (
        <>
            <div className="container my-5">
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Vaša košarica</span>
                            <span className="badge bg-primary rounded-pill">{state.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {state.map(itemList)}

                            <li className="list-group-item d-flex justify-content-between">
                                <span>Ukupno (BAM)</span>
                                <strong>{total} BAM</strong>
                            </li>
                        </ul>

                        <form className="card p-2">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Promo code" />
                                <button type="submit" className="btn btn-secondary">Iskoristi</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Adresa platitelja</h4>
                        <form className="needs-validation" novalidate="">
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">Ime</label>
                                    <input type="text" className="form-control" id="firstName" placeholder=""  required="" />
                                    <div className="invalid-feedback">
                                        Potrebno je unijeti ime
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label">Prezime</label>
                                    <input type="text" className="form-control" id="lastName" placeholder=""  required="" />
                                    <div className="invalid-feedback">
                                        Potrebno je unijeti prezime
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="username" className="form-label">Korisničko ime</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">@</span>
                                        <input type="text" className="form-control" id="username" placeholder="Username" required="" />
                                        <div className="invalid-feedback">
                                            Potrebno je unijeti korisničko ime
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                                    <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                    <div className="invalid-feedback">
                                        Molimo Vas da unesete ispravnu email adresu.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Adresa</label>
                                    <input type="text" className="form-control" id="address" placeholder="1234 Avenija" required="" />
                                    <div className="invalid-feedback">
                                        Unesite adresu za isporuku
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address2" className="form-label">Adresa 2 <span className="text-muted">(Optional)</span></label>
                                    <input type="text" className="form-control" id="address2" placeholder="Broj apartmana" />
                                </div>

                                <div className="col-md-5">
                                    <label htmlFor="country" className="form-label">Država</label>
                                    <select className="form-select" id="country" required="">
                                        <option value="">Izaberite...</option>
                                    
                                        <option>Bosna i Hercegovina</option>



                                    </select>
                                    <div className="invalid-feedback">
                                        Molim vas da izabere državu
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="state" className="form-label">Regija</label>
                                    <select className="form-select" id="state" required="">
                                        <option value="">Izaberite</option>
                                        <option>FBIH</option>
                                        <option>RS</option>

                                    </select>
                                    <div className="invalid-feedback">
                                       Unesite Vašu regiju
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="zip" className="form-label">Poštanski broj</label>
                                    <input type="text" className="form-control" id="zip" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Poštanski broj je potrebno unijeti
                                    </div>
                                </div>
                            </div>

                            <hr className="my-4" />

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="same-address" />
                                <label className="form-check-label" htmlFor="same-address">Adresa platitelja je ista kao adresa primatelja</label>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="save-info" />
                                <label className="form-check-label" htmlFor="save-info">Zapamti informacije za iduće kupnje</label>
                            </div>

                            <hr className="my-4" />

                            <h4 className="mb-3">Plaćanje</h4>

                            <div className="my-3">
                                <div className="form-check">
                                    <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required="" />
                                    <label className="form-check-label" htmlFor="credit">Kreditna kartica</label>
                                </div>
                                <div className="form-check">
                                    <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                    <label className="form-check-label" htmlFor="debit">Debitna kartica</label>
                                </div>
                                <div className="form-check">
                                    <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                    <label className="form-check-label" htmlFor="paypal">PayPal</label>
                                </div>
                            </div>

                            <div className="row gy-3">
                                <div className="col-md-6">
                                    <label htmlFor="cc-name" className="form-label">Ime na kartici</label>
                                    <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                                    <small className="text-muted">Puno ime na kartici</small>
                                    <div className="invalid-feedback">
                                        Potrebno je unijeti ime s kartice
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="cc-number" className="form-label">Broj kartice</label>
                                    <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Potrebno je unijeti broj kartice
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="cc-expiration" className="form-label">Datum isteka</label>
                                    <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Datum isteka je potrebno unijeti
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="cc-cvv" className="form-label">CVV</label>
                                    <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Sigurnosni kod je potrebno unijeti
                                    </div>
                                </div>
                            </div>

                            <hr className="my-4" />

                            <button className="w-100 btn btn-primary btn-lg" type="submit">Nastavi na plaćanje</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout
