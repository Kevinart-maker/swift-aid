const Loading = () => {
    return (
        <div className="loader-screen">
            <img src="/assets/logo.png" alt="swift's logo" srcset="" />
            <div className="loader">
            <div className="loading-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            </div>
        </div>
    );
}
 
export default Loading;