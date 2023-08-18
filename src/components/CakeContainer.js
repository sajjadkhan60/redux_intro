import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";
import { buyIceCream } from "../redux";

function CakeContainer(props) {
  return (
    <div>
      <div className="container">
        <div className="row pt-3">
          <div className="col-md-12 ">
            <h2>My Bakery</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 ml-auto mr-auto">
            <div className="row pt-4">
              <div className="col-md-6 ">
                <div className="heading">
                  <h3>Cakes</h3>
                </div>
                <div className="single-item">
                  <h6>Chocolate Cakes ({props.numOfChocolateCakes})</h6>
                  <button onClick={props.buyCake}>Buy Cake</button>
                </div>
              </div>

              <div className="col-md-6 ">
                <div className="heading">
                  <h3>Ice Creams</h3>
                </div>
                <div className="single-item">
                  <h6>Mango Ice Cream ({props.numOfMangoIceCreams}) </h6>
                  <button onClick={props.buyIceCream}>Buy Ice Cream</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfChocolateCakes: state.cake.numOfChocolateCakes,
    numOfMangoIceCreams: state.iceCream.numOfMangoIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => {
      dispatch(buyCake());
    },
    buyIceCream: () => {
      dispatch(buyIceCream());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
