const SearchLegals = () => {
    return (
        <div className="legal-container">
            <h2 className="nav"><i className="fa-solid fa-arrow-left" onClick={()=> navigate('/')}></i> Find a Legal Practitioner</h2>
            <p className="short-info">
                Get instant feedback. Contact a lawyer to lay a complain.
            </p>
            <div className="search">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="search" placeholder="Search" />
            </div>
            <div className="legals">
                <div className="left-sec">
                    <div className="legal-img">
                        <img src="/assets/legal.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SearchLegals;