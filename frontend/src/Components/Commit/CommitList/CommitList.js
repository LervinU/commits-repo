import './CommitList.css';
import CommitCard from '../CommitCard/CommitCard';
import PagesButton from './PagesButton/PagesButton';
import useFetch from '../../../Hooks/useFetch';
import moment from 'moment';
import { useState } from 'react';
import Utils from '../../../Helpers/Utils';

const CommitList = () => {

/*This URL should be in an environment variable
but due to the nature of this project. Its being
added here as a String*/ 
const URL = 'http://localhost:4000/commits'; 
const {successResponse: commits, failureResponse: error} =  useFetch(URL);
const [page, setPage] = useState(1);

const commitsObj = {};
const currentPageObj = {};
let numberOfPages = 1;
let isDisabledIncrease = false;
let isDisabledDecrease = true;

commits && (() => {
    commits.forEach(commit => commitsObj[moment(commit.author.date).format('ll')] = []);
    commits.forEach(commit => {
        let date = moment(commit.author.date).format('ll');
        commitsObj[date] = [...commitsObj[date], commit];
    });

    let commitArr = Object.entries(commitsObj).map(([key, value]) => value).flat();
    let paginateArr = Utils.pagination(commitArr, 7, page);
    numberOfPages = Math.ceil(commitArr.length / 7);

    paginateArr.forEach(page => currentPageObj[moment(page.author.date).format('ll')] = []);
    paginateArr.forEach(page => {
        let date = moment(page.author.date).format('ll');
        currentPageObj[date] = [...currentPageObj[date], page] ;
      });

})();

if(numberOfPages === page) isDisabledIncrease = true;
if(page > 1) isDisabledDecrease = false;

const increasePage = () => {
    setPage(page + 1);
};

const decreasePage = () => {
    setPage(page - 1);
};

return (
    <div className="container">
        { !error ? 
            commits && Object.entries(currentPageObj).map(([key, value]) => {
                return (
                    <div key={key}>
                        <p style={{color: "#000", marginTop: '2rem', marginBottom: '5px'}}>Commits on {key}</p>
                        {value.map(commit => <CommitCard key={commit.sha} commitObj={commit} />)}
                    </div>
                )
            }):
            <h2>Something went wrong. Try again later.</h2>
        }
        {<PagesButton 
            increase={increasePage}
            decrease={decreasePage}
            disableIncr={isDisabledIncrease}
            disableDecr={isDisabledDecrease}/>}
    </div>
);
};

export default CommitList;