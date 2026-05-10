//reusable loading component - shows loading state while data is fetching

function LoadingSpinner(){
    return(
        <div className="loading-container">
            <div className="spinner">
                <h3>Loading Developers...</h3>
            </div>
        </div>
    )
}

export default LoadingSpinner