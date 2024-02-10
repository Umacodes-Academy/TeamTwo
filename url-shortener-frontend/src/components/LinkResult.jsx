import { useState } from "react"
import { FaCopy } from "react-icons/fa";
import { CopyToClipboard } from 'react-copy-to-clipboard';

const LinkResult = ({ inputValue }) => {
    console.log(inputValue)
    const [shortenLink, setShortenLink] = useState('Generated Link')
    const [copied, setCopied] = useState(false)

    return (
        <div className='url-shortLink-container'>
            <p className='result-text'>{shortenLink}</p>
            <CopyToClipboard 
            text={shortenLink}
            onCopy={(e) => setCopied(true)}
            >
                <FaCopy className="result-btn" />
            </CopyToClipboard>
        </div>
    )
}

export default LinkResult
