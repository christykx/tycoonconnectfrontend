import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../authContext/AuthContext'
import './Banner.css'
// import { MutatingDots } from 'react-loader-spinner'

const Banner = () => {
  const navigate = useNavigate()

  const { currentUser } = useContext(AuthContext)
  const id = currentUser.userid;
  console.log(id, "CURRENT USERRR");

  const [posts, setposts] = useState([])
  const [username, setusername] = useState('')



  useEffect(() => {

    makeRequest.get(`/users/getpost/${id}`).then((response) => {

      console.log(response, "RESSSSSSS");
      if (response.status) {
        console.log(response.data, "Dataaaaa");
        setposts(response.data)

        console.log("Haiiii");
        // alert("Post Details kitti")
        navigate('/')
      }
      else {
        alert("Something went wrong")
      }
    }).catch((err) => {
      console.log(err);
      alert(err.response.data)
      console.log("-----errrrr---", err.response.data);

    })




    makeRequest.get(`/users/getusername/${id}`).then((response) => {

      console.log(response, "RESSSSSSS");
      if (response.status) {
        console.log(response.data, "Dataaaaa");
        setusername(response.data)

        console.log("Haiiii");
        // alert("Post Details kitti")
        navigate('/')
      }
      else {
        alert("Something went wrong")
      }
    }).catch((err) => {
      console.log(err);
      alert(err.response.data)
      console.log("-----errrrr---", err.response.data);

    })


  }, [])




  return (

    <div>

      {/* <MutatingDots
        height="100"
        width="100"
        color="#45e3e6"
        secondaryColor='#f03083'
        radius='12.5'
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />*/}

      {/* This is my banner or news feed area */}


      {/* <p style={{textAlign:'center'}}>This is my banner or news feed area </p> */}

      <div onClick={()=>{navigate('/create')}} style={{ width: '500px',cursor:'pointer', height: '130px',color:'blue', borderRadius: '5px', border: '2px solid grey', marginLeft: '400px' }}> + Add new post</div>
      {/* <br /><br /> */}

      {/* <p>{username}</p> */}

      {posts && posts.map((post, index) => {

        return <div key={index} style={{ width: '500px', marginTop: '40px', height: '400px', borderRadius: '15px', border: '2px solid grey', marginLeft: '400px' }}>
          <h6 style={{ marginLeft: '90px', paddingTop: '10px' }}>{username}</h6>
          <h6 style={{ marginLeft: '90px' }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg> {post.location}</h6>

          <hr></hr>
          <h6 style={{marginLeft:'15px'}}>{post.caption}</h6>
          <h6 style={{ fontWeight: 'normal',marginLeft:'15px' }}>{post.description}</h6>
          {/* <h1 style={{ minWidth: '10px' }}>{post.postpic}</h1> */}
          <img style={{width:'495px',height:'220px'}} src={`https://tycoonconnect.online/uploads/${post.postPicture}`} />
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: '10px' }}>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
              <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
              <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
            </svg>

          </div>

          <br/><br/>

        </div>

      })

      }


      {/* 
      <div style={{ width: '500px', height: '400px', borderRadius: '20px', backgroundColor: 'grey', marginLeft: '400px' }}></div>
      <br /><br />
      <div style={{ width: '500px', height: '400px', borderRadius: '20px', backgroundColor: 'grey', marginLeft: '400px' }}></div>
      <br /><br /> */}


    </div>

  )
}

export default Banner
