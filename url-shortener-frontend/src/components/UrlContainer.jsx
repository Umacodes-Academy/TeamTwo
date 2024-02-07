import { FaCopy } from "react-icons/fa";

const UrlContainer = () => {
    return (
        <div className='url-container'>
            <div className='url-wrapper'>
                <div className="url-form-container">
                    <form autoComplete="off">
                        <h3>URL Link Shortener</h3>
                        <div className="form-group">
                            <label>Enter URL link here</label>
                            <div className='url-link-container'>
                                <input type="url" className='form-control' />
                                <button className='btn'>Get Link</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='url-shortLink-container'>
                    <p className='result-text'>Link url</p>
                    <FaCopy className="result-btn"/>
                </div>
            </div>
        </div>
    )
}

export default UrlContainer
