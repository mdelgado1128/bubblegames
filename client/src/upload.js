// import React, { useState } from "react";
// import axios from "axios";

// const Upload = () => {
//   const [title, setTitle] = useState("");
//   const [materials, setMaterials] = useState("");
//   const [description, setDescription] = useState("");
//   const [fileName, setFileName] = useState("");


// const onChangeFile = (e) => {
//   setFileName(e.ltarget.file[0]);
// }

// const changeOnClick = (e) => {
//   e.preventDefault();

//   const formData = new FormData ();

//   formData.append("title", title);
//   formData.append("materials", materials);
//   formData.append("description", description);
//   formData.append("gameImage", fileName)
// }

// setTitle("");
// setArticle("");
// setAuthorName("");

// axios
//   .post("/articles/add", formData)
//   .then((res) => setMessage(res.data))
//   .catch((err) => {
//     console.log(err);
//   });


// return (
// <AddArticleContainer>
//   <div className="container">
//     <h1>Add New Article</h1>
//     <span className="message">{message}</span>
//     <form onSubmit={changeOnClick} encType="multipart/form-data">
//       <div className="form-group">
//         <label htmlFor="authorname">Author Name</label>
//         <input
//           type="text"
//           value={authorname}
//           onChange={(e) => setAuthorName(e.target.value)}
//           className="form-control"
//           placeholder="Author Name"
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="title">Title</label>
//         <input
//           type="text"
//           name="title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="form-control"
//           placeholder="Title"
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="article">Article</label>
//         <textarea
//           value={article}
//           onChange={(e) => setArticle(e.target.value)}
//           className="form-control"
//           rows="3"
//         ></textarea>
//       </div>
//       <div className="form-group">
//         <label htmlFor="file">Choose article image</label>
//         <input
//           type="file"
//           filename="articleImage"
//           className="form-control-file"
//           onChange={onChangeFile}
//         />
//       </div>

//       <button type="submit" className="btn btn-primary">
//         Post Article
//       </button>
//     </form>
//   </div>
// </AddArticleContainer>
// );
// };

// export default Upload;