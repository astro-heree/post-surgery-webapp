import React, { useEffect, useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import { Button, Card, CardBody, Container, Input } from 'reactstrap'
import { dummyData } from '../utils/constants'
import MessageModal from '../components/MessageModal'

const Admin = () => {
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState([])
    const [editingRowId, setEditingRowId] = useState(null);
    const [editedSurgeonName, setEditedSurgeonName] = useState('');
    const [message, setMessage] = useState("");

    useEffect(() => {
        setData(dummyData)
    },[])

    useEffect(() => {
        console.log(data, "DEKH BHAI")
    },[data])

    // const handleEditSurgeonName = (row) => {
    //     setEditingRowId(row.id);
    //     setEditedSurgeonName(row.surgeon_name);
    // };

    // const handleSaveSurgeonName = (rowId) => {
    //     if (editedSurgeonName.trim() === '') {
    //         alert('Surgeon name cannot be empty.');
    //         return;
    //     }
    //     setData(
    //         data.map((item) =>
    //         item.id === rowId ? { ...item, surgeon_name: editedSurgeonName } : item
    //         )
    //     );
    //     setEditingRowId(null);
    //     setEditedSurgeonName('');
    // };
        
    // const handleCancelEdit = () => {
    //     setEditingRowId(null);
    //     setEditedSurgeonName('');
    // };
    
    const columns = [
        {
            dataField: 'procedure',
            text: 'Procedure',
        },
        {
            dataField: 'side',
            text: 'Side',
        },
        {
            dataField: 'surgeon_name',
            text: 'Surgeon Name',
            formatter: (cell, row) => {
                // if (editingRowId === row.id) {
                //     // Render input field when editing
                //     return (
                //         <div className="d-flex align-items-center">
                //             <Input
                //                 type="text"
                //                 bsSize="sm"
                //                 value={editedSurgeonName}
                //                 onChange={(e) => setEditedSurgeonName(e.target.value)}
                //                 onKeyDown={(e) => {
                //                     if (e.key === 'Enter') {
                //                         handleSaveSurgeonName(row.id);
                //                     }
                //                 }}
                //             />
                //             <Button
                //                 color="success"
                //                 size="sm"
                //                 className="ms-2"
                //                 onClick={() => handleSaveSurgeonName(row.id)}
                //             >
                //                 Save
                //             </Button>
                //             <Button
                //                 color="secondary"
                //                 size="sm"
                //                 className="ms-2"
                //                 onClick={() => handleCancelEdit()}
                //             >
                //                 Cancel
                //             </Button>
                //         </div>
                //     );
                // } else {
                    // Render display mode with Edit button
                    return (
                        <div className="d-flex align-items-center">
                            <span>{cell}</span>
                            {/* <Button
                                color="warning"
                                size="sm"
                                className="ms-2"
                                onClick={() => handleEditSurgeonName(row)}
                            >
                                Edit
                            </Button> */}
                        </div>
                    );
                // }
            },
        },
        {
            dataField: 'file',
            text: 'File',
            formatter: (cell, row) => {
                return cell ? (
                    <a href={cell} target="_blank" rel="noopener noreferrer" className="text-white">
                        View File
                    </a>
                ) : (
                    'No File'
                );
            },
        },
        {
            dataField: '',
            text: 'Actions',
            formatter: (cell, row) => {
                return (
                    <div className="d-flex">
                        <Button
                            id="approve_button"
                            color="success"
                            size="sm"
                            className="me-2"
                            disabled={row.isApproved === true}
                            onClick={() => {
                                // debugger
                                setData((prevData) =>
                                    prevData.map((item) =>
                                      item.id === row.id ? { ...item, isApproved: true } : item
                                    )
                                );
                            }}
                        >
                            Approve
                        </Button>
                        <Button
                            id="reject_button"
                            color="danger"
                            size="sm"
                            className="me-2"
                            disabled={row.isApproved === false}
                            onClick={() => {
                                // setData([...data, data[row.id].isApproved = false])
                                setData((prevData) =>
                                    prevData.map((item) =>
                                      item.id === row.id ? { ...item, isApproved: false } : item
                                    )
                                );
                            }}
                        >
                            Reject
                        </Button>
                        <Button
                            color="primary"
                            size="sm"
                            onClick={() => {
                                // Open message modal specific to this row
                                setShowModal(true);
                                // setSelectedRow(row); // Assuming you have state to track selected row
                            }}
                        >
                            Message
                        </Button>
                    </div>
                );
            },
        },
    ];


    return (
        <div className="bg-dark min-vh-80 text-white d-flex flex-column" style={{ height: "80vh" }}>
            <Container className="my-5">
                <h2 className="text-center mb-4">Admin Dashboard</h2>
                <MessageModal
                    showModal={showModal}
                    title={'Enter the message'}
                    handleConfirm={() => {
                        setShowModal(false)
                        setMessage("")
                        alert("Message sent successfully")
                     }}
                    handleCancel={() => setShowModal(false)}
                    closeModalClick={() => setShowModal(false)}
                    message={message}
                    setMessage={setMessage}
                />
                <Card className="bg-secondary text-white">
                    <CardBody>
                        <div className="table-responsive">
                            <BootstrapTable
                                classes="table table-bordered table-hover text-white"
                                keyField="id"
                                columns={columns}
                                data={data}
                                headerClasses="thead-dark"
                            />
                        </div>
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
}

export default Admin