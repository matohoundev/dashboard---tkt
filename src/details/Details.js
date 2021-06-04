import axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react';
import './details.scss'

export const Details = props => {

    const [companiesDetails, setCompaniesDetails] = useState([]);
    const [details_2016, setDetails_2016] = useState([]);
    const [details_2017, setDetails_2017] = useState([]);
    const [compare, setCompare] = useState({ "ca" : ``, "margin" : ``, "ebitda" : ``, "loss" : ``});

    const infos = props.location.state.info;

    const euro = new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2
      });

    useEffect(() => {
        const fetchResult = async () => {
            const res = await axios.get(
                'https://test.wertkt.com/api/result/',
            );

            setCompaniesDetails(res.data);

        };
        fetchResult();
    }, [])

        useEffect(() => {
            
            const resultYear = () => {
                for (let i = 0; i < companiesDetails.length; i++) {
                    if (companiesDetails[i].id === infos.results[0]) {
                        setDetails_2016(companiesDetails[i]);
                    } else if (companiesDetails[i].id === infos.results[1]) {
                        setDetails_2017(companiesDetails[i]);
                    }
                }
            }
            resultYear();
        }, [companiesDetails, details_2016, details_2017, infos])


            const comparison = () => {

                let ca_ = [setCompare];
                let margin_ = [setCompare];
                let ebitda_ = [setCompare];
                let loss_ = [setCompare];

                if (details_2016.ca < details_2017.ca) {
                    ca_.push(compare.ca = details_2017.ca - details_2016.ca);
                } else {
                    ca_.push(compare.ca = details_2016.ca - details_2017.ca);
                }

                if (details_2016.margin < details_2017.margin) {
                    margin_.push(compare.margin = details_2017.margin - details_2016.margin);
                } else {
                    margin_.push(compare.margin = details_2016.margin - details_2017.margin);
                }

                if (details_2016.ebitda < details_2017.ebitda) {
                    ebitda_.push(compare.ebitda = details_2017.ebitda - details_2016.ebitda);
                } else {
                    ebitda_.push(compare.ebitda = details_2016.ebitda - details_2017.ebitda);
                }

                if (details_2016.loss < details_2017.loss) {
                    loss_.push(compare.loss = details_2017.loss - details_2016.loss);
                } else {
                    loss_.push(compare.loss = details_2016.loss - details_2017.loss);
                }   
            }
            comparison();
   
        
    return (
        <Fragment>
        <section className="head-details">
            <ul>
                <li><h2>Name</h2></li>
                <li><h2>Secteur</h2></li>
                <li><h2>Siren</h2></li>
            </ul>
            <ul>
                <li><h2>{infos.name}</h2></li>
                <li><h2>{infos.sector}</h2></li>
                <li><h2>{infos.siren}</h2></li>
            </ul>
        </section>
        <div className="hr">
            <h3>Historical</h3>
        </div>
        <section className="figure">
            <h4>Year 2016</h4>
            <div>
                <ul>
                    <li>Ca</li>
                    <li>Marge</li>
                    <li>Ebitda</li>
                    <li>Loss</li>
                </ul>
                <ul>       
                    <li>{euro.format(details_2016.ca)}</li>
                    <li>{euro.format(details_2016.margin)}</li>
                    <li>{euro.format(details_2016.ebitda)}</li>
                    <li>{euro.format(details_2016.loss)}</li>
                </ul>
            </div>
            <h4>Year 2017</h4>
            <div>
                <ul>
                    <li>Ca</li>
                    <li>Marge</li>
                    <li>Ebitda</li>
                    <li>Loss</li>
                </ul>
                <ul>
                    <li>{euro.format(details_2017.ca)}</li>
                    <li>{euro.format(details_2017.margin)}</li>
                    <li>{euro.format(details_2017.ebitda)}</li>
                    <li>{euro.format(details_2017.loss)}</li>
                </ul>
            </div>
            <h4>Comparison</h4>
            <div>
                <ul>
                    <li>Ca</li>
                    <li>Marge</li>
                    <li>Ebitda</li>
                    <li>Loss</li>
                </ul>
                <ul>
                    <li>{euro.format(compare.ca)}</li>
                    <li>{euro.format(compare.margin)}</li>
                    <li>{euro.format(compare.ebitda)}</li>
                    <li>{euro.format(compare.loss)}</li>
                </ul>
            </div>
        </section>
        </Fragment>
    )
}

export default Details;
