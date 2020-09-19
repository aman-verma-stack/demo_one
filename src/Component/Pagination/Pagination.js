import React, { Component } from 'react';
import '../../scss/2-modules/pagination.scss';


class Pagination extends Component {

    render() {

        const { postPerPage, totalPost, paginate, nextPage, prevPage, currentPage } = this.props;

        const pageNumbers = [];

        for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
            pageNumbers.push(i);
        }

        return (
            <nav>
                <ul className="navigation">
                    <li className="page-item">
                        <a className="page-link" href="#" 
                        onClick={() => currentPage > 1?  prevPage() : ''}>Previous</a>
                    </li>
                    {pageNumbers.map(num => (
                        <li key={num}>
                            <a className={currentPage == num ? 'active' : ''} onClick={() => paginate(num)} href="#" >{num}</a>
                        </li>
                    ))}
                    <li className="page-item">
                        <a className="page-link" href="#" 
                        onClick={() => currentPage < pageNumbers.length?  nextPage() : ''}>Next</a>
                    </li>
                </ul>
            </nav>
        )
    }
}


export default Pagination;