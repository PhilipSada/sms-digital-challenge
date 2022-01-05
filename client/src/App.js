import React, { useState, useEffect } from 'react';
import './App.scss';
import 'rsuite/dist/styles/rsuite-default.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import Table from './components/Table';
import moment from 'moment';
import axios from 'axios';
import { DateRangePicker } from 'rsuite';
import logo from './assets/images/sms-digital-logo.png'


export default function App() {
    const [dates, setDates] = useState([new Date("2010-01-01"), new Date()]);
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [filteredInfo, setFilteredInfo] = useState([]);


    /**
    * Gets the dates from the datepicker and filters the data
    * 
    */
    const handleDates = (value) => {
        const startDate = moment(value[0]).format('YYYY-MM-DD');
        const endDate = moment(value[1]).format('YYYY-MM-DD');

        const result = info.filter(elem => moment(elem.start_date).format('YYYY-MM-DD') >= startDate
            && moment(elem.end_date).format('YYYY-MM-DD') <= endDate);

        setFilteredInfo(result)
    }

    const getInfo = async () => {
        setLoading(true)
        setError(false)
        try {
            const data = await axios.get('http://localhost:8080/info').then((response) => {
                setInfo(response.data)
                setFilteredInfo(response.data)
                setLoading(false)

            })
        } catch (e) {
            console.log(e)
            setError(true)
            setLoading(false)
        }
    }

    useEffect(() => {
        getInfo();

    }, [])
    return (
        <div className='app'>

            <div className='container'>
                <div className='table-card mt-4 mb-4'>

                    <div className='logo-container mt-2'>
                        <img src={logo} className='logo' alt='SMS Digital' />
                    </div>
                    <div className='mb-4 mt-4'>

                        <DateRangePicker
                            className="date-range-picker"
                            onOk={(value) => handleDates(value)}
                            onChange={(value) => setDates(value)}
                            placeholder="M/D/YYYY - M/D/YYYY"
                            // value={dates}
                            renderValue={(value) => {
                                return moment(value[0]).format('M/D/YYYY') + ' ~ ' + moment(value[1]).format('M/D/YYYY');
                            }}
                        />
                    </div>
                    {error &&
                        <div className="alert alert-danger text-center mb-4" role="alert">
                            <span>An error occurred!!</span>
                        </div>
                    }
                    {
                        loading ?
                            <div className="d-flex justify-content-center flex-column align-items-center">
                                <div className="spinner-border" role="status"></div>
                                <p className='font-weight-bold mt-2'>Loading...</p>
                            </div>
                            :
                            <div>
                                {
                                    filteredInfo.length === 0 ?
                                        <div>
                                            <p className='text-center'>No results found</p>
                                        </div>
                                        :
                                        <Table filteredInfo={filteredInfo} />
                                }
                            </div>
                    }

                </div>

            </div>

        </div>
    )
}

