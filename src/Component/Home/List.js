import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchListAPI } from '../../Api/Home/ListApi';

import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';


class List extends Component {

    constructor(props) {
        super(props);
        this.props.fetchList({})
    }

    state = {
        currentPage: 1,
        postPerPage: 5,
    }



    render() {

        let all_data = this.props.ListData;

        const { currentPage, postPerPage } = this.state;

        const indexOfLastPost = currentPage * postPerPage;
        const indexOfFirstPost = indexOfLastPost - postPerPage;
        const currentPost = all_data.list.slice(indexOfFirstPost, indexOfLastPost);

        const paginate = pageNum => this.setState({ currentPage: pageNum });

        const nextPage = () => this.setState({ currentPage: currentPage + 1 })

        const prevPage = () => this.setState({ currentPage: currentPage - 1 })

        var cardData = currentPost.map(data =>
            <Card key={data.id} data={data} />
        )

        return (
            <div>
                { cardData}
                <Pagination
                    postPerPage={postPerPage}
                    totalPost={all_data.list.length}
                    currentPage={currentPage}
                    paginate={paginate}
                    nextPage={nextPage}
                    prevPage={prevPage}
                />
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        ListData: state.data,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchList: (searchParams) => dispatch(fetchListAPI(searchParams)),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(List);


