import React from 'react';

import './CSS/Produk.css';

class Produk extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            stock: this.props.stock,
            sub: "Beli",
            status: "Tersedia",
            disabled : false
        }
    }

    ButtonBeli = () => {
        this.setState ({
            stock: this.state.stock -1
        })

        if(this.state.stock ===1){
            this.setState({
                status : "Habis",
                disabled : true 
            })
        }
    }



    render(){
        return <div className="box-stock">
            <h2>{this.props.nama}</h2>
            <img src="https://ibox.co.id/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/m/b/mbp15touch-silver-select-cto-201807_3_1.jpeg" alt=""/>
            <p><b>{this.props.harga}</b></p>
            <p>{this.state.stock}</p>
            <button className="btn-click"onClick={this.ButtonBeli} disabled={this.state.disabled}>Beli</button>
            <p>{this.state.status}</p>

        </div>
    }
}

export default Produk