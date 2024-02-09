import { useState } from "react";

const UrlContainer = ({ setInputValue }) => {
    const [urlLink, setUrlLink] = useState('')

    const handleOnSubmit = () => {
        setInputValue(urlLink);
        setUrlLink('')
    }


    return (
        <div className="url-form-container">
            <form autoComplete="off">
                <h3>URL Link Shortener</h3>
                <div className="form-group">
                    <label>Enter URL link here</label>
                    <div className='url-link-container'>
                        <input
                            type="text"
                            className='form-control'
                            value={urlLink}
                            onChange={(e) => setUrlLink(e.target.value)}
                            required
                        />
                        <button onClick={handleOnSubmit} className='btn'>Get Link</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UrlContainer
