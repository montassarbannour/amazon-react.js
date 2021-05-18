import React from 'react'
import "./Home.css"
import Product from '../compoents/Product'

function Home() {
    return (
        <div className="home">
           <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/magellan/country/france/EvergreenRefresh/FromDec-19/FR_Evergreen_Refresh_ENG_SADLP_Tablet_1453x363.jpg" alt=""/>

          {/*product  */}
          <div className="home__row">
              
          <Product
          id="1" 
          title="Elon Musk : Tesla, SpaceX, and the Quest for a Fantastic Future"
          price={18.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/5112YFsXIJL._SX330_BO1,204,203,200_.jpg" 
           />
            <Product
          id="12" 
          title="Apple iPhone XR (64 Go) "
          price={400.00}
          rating={5}
          image="https://static.fnac-static.com/multimedia/Images/FR/MDM/08/ca/8d/9292296/1505-1/tsp20210503181653/Apple-iPhone-XR-64-Go-6-1-Rouge.jpg" 
           />

          </div>
          <div className="home__row">
              
          <Product
          id="123" 
          title="Apple Watch Series 3 42mm (GPS) - Boîtier En Aluminium Gris Sidéral Avec Bracelet Sport Gris"
          price={209.00}
          rating={4}
          image="https://www.itechstore.tn/3543-large_default/apple-watch-series-6-44mm-boitier-en-aluminium-gris-sideral-bracelet-sport-noir.jpg" 
           />
            <Product
          id="1234" 
          title="ASUS TUF Carte Graphique Nvidia GeForce GTX 1650 4 Go Power OC Edition Gaming "
          price={300.00}
          rating={5}
          image="https://www.wiki.tn/47701-large_default/carte-graphique-asus-rog-strix-gtx-1650-a-4g-gddr5.jpg" 
           />
           <Product
          id="1235" 
          title="Homme Été Casual Survêtement T-Shirt À Manches Courtes Shorts De Sport Sets 2 Pièces"
          price={10.96}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71bftVKjNgL._AC_UX679_.jpg" 
           />

          </div>
          <div className="home__row">
              
          <Product
          id="12356" 
          title="STRONG SRT32HC2003 HD TV LED, écran 80cm, 32 Pouces, Triple Tuners (DVB-T2 HEVC 265/C/S2), 60 Hz, HDMI x2, USB multimédia, CI+"
          price={200.96}
          rating={5}
          image="https://images.samsung.com/is/image/samsung/africa-fr-fhd-t5300-ua40t5300auxly-frontblack-243706300?$720_576_PNG$" 
           />
           </div>

        </div>
    )
}

export default Home
