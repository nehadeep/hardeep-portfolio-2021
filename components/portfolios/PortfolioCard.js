import {formatDate} from "@/utils/helperFun";
import Link from "next/link";
import React from "react";


const PortfolioCard = ({portfolio})=>{
    return (
        <div className="card subtle-shadow no-border">
            <div className="card-body">
                <h5 className="card-title">{portfolio.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{portfolio.jobTitle}, {portfolio.company.city}, {portfolio.company.state}</h6>
                <p className="card-text fs-2">{portfolio.description}</p>
                <Link href='/portfolios/[id]' as={`/portfolios/${portfolio._id}`}>
                    <span className="card-link" style={{float:'right', color:'blue'}}>
                       View More Detail
                    </span>
                </Link>
            </div>
            <div className="card-footer no-border">
                <small className="text-muted">{formatDate(portfolio.startDate)} - {portfolio.endDate?formatDate(portfolio.endDate): 'Present'}</small>
            </div>
        </div>
    )
}

export default PortfolioCard;