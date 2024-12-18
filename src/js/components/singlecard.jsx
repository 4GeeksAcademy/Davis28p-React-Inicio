import React from "react";

const Singlecard = ()=> {
    return(
        <div className="col">
            <div className="card h-100 w-55">
              <img src="https://tse1.mm.bing.net/th?id=OIP.6E8ylMoN9AfN7qaff2OF_wHaE0&pid=Api&P=0&h=180" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Titulo de Tarjeta</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div className="card-footer">
              <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
    )
}
export default Singlecard;