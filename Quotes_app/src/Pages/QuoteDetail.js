import React, { Fragment } from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import { Link } from "react-router-dom";
import useHttp from "../hooks/use-http";
import {getSingleQuote} from "../lib/api"
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";



function QuoteDetail() {
  const params = useParams();
  const {quoteId}=params
const {sendRequest,status,data:loadedQuote,error}=useHttp(getSingleQuote,true)

useEffect(()=>{
sendRequest(quoteId)
},[sendRequest,quoteId])

if (status==='pending') {
  return <div className="centered">
<LoadingSpinner/>
  </div>
}

if (error) {
  return <p className="centered ">{error}</p>
}

if (!loadedQuote.text) {
  return <p>Not Quote Found!</p>
}

  return (
    <Fragment>
     <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author}/>
     <Route path={`/quotes/${params.quoteId}`} exact>
      <div className="centered">
<Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>Load Comments</Link>

      </div>
     </Route>
      <Route path={`/quotes/${params.quoteId}/comments`}>
      <Comments/>
      </Route>
      
    </Fragment>
  );
}

export default QuoteDetail;
