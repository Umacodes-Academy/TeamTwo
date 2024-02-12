import { useState } from "react";

const UrlContainer = ({ setInputValue }) => {
    const [urlLink, setUrlLink] = useState('');
    const [errMsg, setErrMsg] = useState(false)

    const REGEX = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/

    const handleOnSubmit = () => {
        // here is the form validation with REGEX
        if (!urlLink) {
            console.log('Please Insert your URL link')
            setErrMsg('Please Insert your URL link')
        } else if (!REGEX.test(urlLink)) {
            console.log('Please input a valid URL link')
            setErrMsg('Please input a valid URL link')
        } else {
            setErrMsg(false)
            setInputValue(urlLink)
        }

        // To clear form after data has been sent
        setUrlLink('')
    }


    return (
        <div className="url-form-container">
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
                    <button
                        className='btn'
                        onClick={handleOnSubmit}
                    >
                        Get Link
                    </button>
                </div>
                <p className="wrong-input">{errMsg}</p>
            </div>
        </div>
    )
}

export default UrlContainer
