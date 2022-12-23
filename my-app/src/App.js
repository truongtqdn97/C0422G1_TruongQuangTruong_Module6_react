import React from "react";
import './App.css';
import {
    Button,
    Table
} from "reactstrap";
import Example from "./Example";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            name: "",
            price: 0,
            action: "THÊM MỚI",
            items: [
                {
                    name: "Phao câu gà",
                    price: 5000
                },
                {
                    name: "Trứng non",
                    price: 7000
                },
                {
                    name: "Lòng gà",
                    price: 6000
                },
                {
                    name: "Trứng gà",
                    price: 3000
                },
                {
                    name: "Huyết gà",
                    price: 1
                }
            ]
        }
        this.changeName = this.changeName.bind(this);
        this.changePrice = this.changePrice.bind(this);
    }

    changeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    changePrice = (e) => {
        this.setState({
            price: e.target.value
        })
    }

    addItem = () => {
        if (!this.state.items.find(item => item.name === this.state.name)) {
            this.setState({
                items: [
                    ...this.state.items,
                    {
                        name: this.state.name,
                        price: this.state.price
                    }
                ],
                name: "",
                price: ""
            })
        }
    }

    edit = (item, index) => {
        this.setState({
            action: 'CHỈNH SỬA',
            name: item.name,
            price: item.price,
            index: index
        });
    }

    update = () => {
        let data = this.state.items;
        data.map((item, index) => {
            if (this.state.index === index) {
                item.name = this.state.name;
                item.price = parseInt(this.state.price);
            }
        })
        this.setState({
            items: data,
            name: "",
            price: "",
            action: 'THÊM MỚI'
        })
    }

    delete = (name) => this.setState({
        items: this.state.items.filter(item => item.name != name)
    })

    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-8">
                        <h2 className="d-flex justify-content-center">NỘI TẠNG QUÁN</h2>
                        <Table className="mt-3"
                               hover
                               responsive
                               striped
                        >
                            <thead>
                            <tr className="table-primary">
                                <th>
                                    #
                                </th>
                                <th>
                                    Tên sản phẩm
                                </th>
                                <th>
                                    Giá
                                </th>
                                <th>
                                    Sửa
                                </th>
                                <th>
                                    Xoá
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.items.map((item, index) => (
                                    <tr key={index}>
                                        <th scope="row">
                                            {index + 1}
                                        </th>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <Button color="success" outline
                                            onClick={()=>this.edit(item,index)}>
                                                Sửa
                                            </Button>
                                        </td>
                                        <td>
                                            <Button color="danger" outline
                                            onClick={()=>this.delete(item.name)}>
                                                Xoá
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </Table>
                    </div>
                    <div className="col-4">
                        <h1>{this.state.action}</h1>
                        <div className="form-group">
                            <label>Tên nội tạng</label>
                            <input type="text" name="" className="form-control" onChange={this.changeName}
                                   value={this.state.name}/>
                        </div>
                        <div className="form-group">
                            <label>Giá</label>
                            <input type="text" name="" className="form-control" onChange={this.changePrice}
                                   value={this.state.price}/>
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn btn-primary"
                                    onClick={this.state.action == 'THÊM MỚI' ? this.addItem : this.update}>OK
                            </button>
                        </div>

                    </div>
                </div>
                <Example/>
            </div>
        );
    }
}

export default App;
