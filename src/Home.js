import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
           <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/magellan/country/france/EvergreenRefresh/FromDec-19/FR_Evergreen_Refresh_ENG_SADLP_Tablet_1453x363.jpg" alt=""/>

          {/*product  */}
          <div className="home__row">
              
          <Product
          id="123" 
          title="Elon Musk : Tesla, SpaceX, and the Quest for a Fantastic Future"
          price={18.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/5112YFsXIJL._SX330_BO1,204,203,200_.jpg" 
           />
            <Product
          id="123" 
          title="Elon Musk : Tesla, SpaceX, and the Quest for a Fantastic Future"
          price={18.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/5112YFsXIJL._SX330_BO1,204,203,200_.jpg" 
           />

          </div>
          <div className="home__row">
              
          <Product
          id="123" 
          title="Elon Musk : Tesla, SpaceX, and the Quest for a Fantastic Future"
          price={18.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/5112YFsXIJL._SX330_BO1,204,203,200_.jpg" 
           />
            <Product
          id="123" 
          title="Elon Musk : Tesla, SpaceX, and the Quest for a Fantastic Future"
          price={18.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/5112YFsXIJL._SX330_BO1,204,203,200_.jpg" 
           />
           <Product
          id="123" 
          title="Elon Musk : Tesla, SpaceX, and the Quest for a Fantastic Future"
          price={18.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/5112YFsXIJL._SX330_BO1,204,203,200_.jpg" 
           />

          </div>
          <div className="home__row">
              
          <Product
          id="123" 
          title="Elon Musk : Tesla, SpaceX, and the Quest for a Fantastic Future"
          price={18.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/5112YFsXIJL._SX330_BO1,204,203,200_.jpg" 
           />
           </div>

        </div>
    )
}

export default Home
