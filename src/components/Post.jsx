import imagen from '../assets/img/premier-league-intro.png';

export function Post() {
  return (
    <div className="container mt-2">
        <div className="card" >
            <img src={ imagen } className="card-img-top" alt="Imagen"/>
            <div className="card-body">
                <div className="d-flex justify-content-end">
                    <h5 className="postDate me-auto">3 min ago</h5>
                    <button className='btn btn-danger'><i className="fa-solid fa-heart"/>43k</button>
                </div>
                <h5 className="userInfo">@eric</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                
                <h6 className="card-subtitle comment"><i className="fa-regular fa-message me-2 comment"/>Comments (15)</h6>
            </div>
            
            {/* <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div> */}
        </div>
    </div>
  );
}
