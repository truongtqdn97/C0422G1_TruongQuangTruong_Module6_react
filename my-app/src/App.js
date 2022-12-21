import React from "react";
import './App.css';
import {Button} from "reactstrap";
import {Table} from "reactstrap";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            name: "",
            price: 0,
            action: "ADD",
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

    render() {
        return (
            <div className="container">
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
                        <th colSpan="2" className="align-content-center">
                            Hành động
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.items.map((item, index)=>(
                            <tr key={index}>
                                <th scope="row">
                                    {index+1}
                                </th>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td><Button color="success" outline>Update</Button></td>
                                <td><Button color="danger" outline>Remove</Button></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default App;
