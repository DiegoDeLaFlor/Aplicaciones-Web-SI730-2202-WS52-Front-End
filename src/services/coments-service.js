import axios from 'axios'

export class ComentsService {
  getComments = () => {
    return axios.get("http://localhost:3000/comments")
  }
  postComments = (body, postId) => {
    return axios.post("http://localhost:3000/comments",{
      "body": body,
      "postId": postId
    })
  }
  deleteComment(id){
    return axios.delete("http://localhost:3000/comments/" + id);
  }

  putComment(id){
    return axios.put("http://localhost:3000/comments/" + id, {
      "body": body,
      "postId": postId
    });
  }
}