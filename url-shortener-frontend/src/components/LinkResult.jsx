import { useEffect, useState } from "react"
import { FaCopy } from "react-icons/fa";
import { CopyToClipboard } from 'react-copy-to-clipboard';

const LinkResult = ({ shortenLink, loading, error }) => {

    const [copied, setCopied] = useState(false)



    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false);
        }, 1000);

        return () => clearTimeout(timer)
    }, [copied])

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>something went wrong with server</p>
    }

    return (
        <>
            {shortenLink &&
                (
                    <div className='url-shortLink-container'>
                        <p className='result-text'>{shortenLink}</p>
                        <CopyToClipboard
                            text={shortenLink}
                            onCopy={() => setCopied(true)}
                        >
                            <FaCopy className="result-btn" />
                        </CopyToClipboard>
                        {copied &&
                            (
                                <div className='res'>
                                    <span>Copied</span>
                                </div>
                            )
                        }
                    </div>
                )}
        </>
    )
}

export default LinkResult
