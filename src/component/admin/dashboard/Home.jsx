import React from 'react'
import Card from 'react-bootstrap/Card'
import { Chart } from "react-google-charts";
import Table from 'react-bootstrap/Table'
export const data = [
    ["Year", "Sales", "Expenses", "Profit"],
    ["2019", 1000, 400, 200],
    ["2020", 1170, 460, 250],                                                   
    ["2021", 660, 1120, 300],
    ["2022", 1030, 540, 350],
];
function Home() {
    return (
        <>
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px', marginLeft:'90px' }}>
                <div>
                    <Card style={{ width: '12rem', }}>
                        <Card.Body>
                            <Card.Title>Users</Card.Title>
                            <Card.Text>
                                Total :
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '12rem' }}>
                        <Card.Body>
                            <Card.Title>Shops</Card.Title>
                            <Card.Text>
                                Total:
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '12rem' }}>
                        <Card.Body>
                            <Card.Title>Revenue</Card.Title>
                            <Card.Text>
                                Total:
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '12rem' }}>
                        <Card.Body>
                            <Card.Title>Employee</Card.Title>
                            <Card.Text>
                                Total:
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
           
            <hr />
            <div style={{ display: 'flex' }}>

                <div>
                    <Chart
                        chartType="LineChart"
                        width="110%"
                        height="400px"
                        data={data}
                    />
                </div>


                <div style={{ border: "2px", fontSize: '11px' , marginLeft:'20px',height:'100%' }}>
                    <Table  striped bordered hover variant='dark' style={{ borderColor: 'White',width:"100%",
                        height:"300px",marginTop:'30px' }}>
                        <thead>
                            <tr>

                                <th>Product ID</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Order Time</th>
                                <th>Customer</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <td>id01</td>
                                <td>19</td>
                                <td>990.00</td>
                                <td>1:22:10</td>
                                <td>Monu</td>
                                <td>Delivered</td>
                            </tr>
                            <tr>

                                <td>id02</td>
                                <td>18</td>
                                <td>990.00</td>
                                <td>1:22:12</td>
                                <td>vivegam</td>
                                <td>Delivered</td>
                            </tr>
                            <tr>

                                <td>id03</td>
                                <td>12</td>
                                <td>1190.00</td>
                                <td>21:12:56</td>
                                <td>thunder</td>
                                <td>Delivered</td>
                            </tr>
                            <tr>

                                <td>id04</td>
                                <td>23</td>
                                <td>1720.00</td>
                                <td>14:12:19</td>
                                <td>vinnet</td>
                                <td>Delivered</td>
                            </tr>
                            <tr>

                                <td>id05</td>
                                <td>34</td>
                                <td>2140.00</td>
                                <td>09:12:35</td>
                                <td>Mohan</td>
                                <td>Delivered</td>
                            </tr>
                            <tr>

                                <td>id06</td>
                                <td>19</td>
                                <td>890.00</td>
                                <td>2:22:12</td>
                                <td>ayush</td>
                                <td>Delivered</td>
                                </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default Home