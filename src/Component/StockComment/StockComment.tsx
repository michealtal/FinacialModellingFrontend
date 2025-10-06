import React, {useState,useEffect} from 'react'
import StockCommentForm from './StockCommentForm/StockCommentForm'
import StockCommentList from '../StockCommentList/StockCommentList';
import { commentPostAPI, commentGetAPI } from '../../Servics/CommentService';
import type{ CommentGet } from '../../Models/Comment';
import {toast} from "react-toastify"
import Spinner from '../Spinner/Spinner';


type Props = {
    stockSymbol: string;
}
type CommentFormInputs = {
   title:string;
   content: string;
}

const StockComment = ({stockSymbol}: Props) => {
  const [comments, setComments] = useState<CommentGet[] | null>(null);
  const[loading, setLoading] = useState<boolean>();

  useEffect(() => {    
    getComments();
  },[ ])

  const handleComment = (e:CommentFormInputs) =>{
    commentPostAPI(e.title, e.content, stockSymbol)
      .then((res) => {
        if(res) {
          toast.success("Comment Created successfully!");
          getComments()
        }
      })
      .catch((e) => {
        toast.warning(e);
      })
  }

  const getComments = () => {
    setLoading(true);
    commentGetAPI(stockSymbol)
    .then((res) => {
      setLoading(false);
      setComments(res?.data!);

    })
  }

  return (
  
     <div className="flex flex-col">
  <StockCommentForm symbol={stockSymbol} handleComment={handleComment}/>
  <div className="mt-10"></div>
      {loading ? <Spinner/>:comments && <StockCommentList comments={comments}/>}
  </div>

)
}
export default StockComment