import React from 'react'
import Card from '../Card'

function Dashbord() {
    const cards = [
        {
            title:"HEAD MASTERS",
            price:"2",
            theme:"primary"
        },
        {
            title:"TEACHERS",
            price:"25",
            theme:"success"
        },
        {
            title:"OFFICERS",
            price:"15",
            theme:"info"
        },
        {
            title:"SPORTS MASTER",
            price:"4",
            theme:"danger"
        },
    ]
    const carde = [
        {
            title:"BOYS",
            price:"100",
            theme:"danger"
        },
        {
            title:"GIRLS",
            price:"120",
            theme:"info"
        }
    ]
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">STAFF REPORTS</h1>
                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate staff Report</a>
            </div>
            <div className="row">
                {
                    cards.map((card)=>{
                       return <Card card={card}></Card>
                    })
                }
            </div>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">STUDENTS REPORTS</h1>
                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate students Report</a>
            </div>
            <div className="row">
                {
                    carde.map((card)=>{
                       return <Card card={card}></Card>
                    })
                }
            </div>
        </div>
    )
}

export default Dashbord
