import React, { Fragment, useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import './home.scss'

export const Home = () => {

    const [companiesInfos, setCompaniesInfos] = useState([]);

    useEffect(() => {
        const fetchBiz = async () => {
            const res = await axios.get(
                'https://test.wertkt.com/api/biz/',
            );

            setCompaniesInfos(res.data);
        };
        fetchBiz();
    }, [])

    const sort = () => {
        let tri = [setCompaniesInfos];

        console.log(companiesInfos.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        }));

        tri.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });
    }

    return (
        <Fragment>
            <aside>
                <ul>
                    <li><span>{companiesInfos.length}</span>Business</li>
                    <li><span>12 312 432 360</span>CA Total</li>
                    <li><span>652 251 201</span>MarginTotal</li>
                    <li><span>253 248 687</span>Ebitda</li>
                    <li><span>50 340 511</span>Loss</li>
                </ul>
            </aside>
            <div className="search">
                <button className="sort" onClick={sort}>Sort from a to z</button>
            </div>
            <section className="companies">
                <h2>List of companies</h2>
                <ul className="head-list">
                    <li>N°</li>
                    <li>Name</li>
                    <li>Secteur</li>
                    <li>Siren</li>
                </ul>
                {companiesInfos.map(info => (
                    <Link key={info.id}
                        to={{
                            pathname: "/details",
                            state: {
                                info
                            }
                        }}>
                        <ul>
                            <li>{info.id}</li>
                            <li>{info.name}</li>
                            <li>{info.sector}</li>
                            <li>{info.siren}</li>
                        </ul>
                    </Link>
                ))}
            </section>
        </Fragment>
    )
}

export default Home;
