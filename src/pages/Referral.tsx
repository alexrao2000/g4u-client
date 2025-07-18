import { useState } from 'react';
import { getReferralCode } from '../api/referral';
import '../css/Home.css';
//import { useNavigate } from 'react-router-dom';

function Referral() {
  const [referralCode, setReferralCode] = useState<string>(''); // Placeholder
  const [copied, setCopied] = useState<boolean>(false);

  let referralLink = `${window.location.origin}/register?ref=${referralCode}`;

  const generateReferral = async () => {
    const code = await getReferralCode()
    console.log(code)
    setReferralCode(code)
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="home-container">
      <div className="home-card">

        <h1 className="home-title">Your Referral Link</h1>
        
        <div className="referral-section">

          {referralCode ? (
            
            <div>
              <span className="referral-label">Share this link with friends:</span>
              <a 
                href={referralLink} 
                className="referral-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {referralLink}
              </a>

              <button 
                onClick={copyToClipboard}
                className={`copy-button ${copied ? 'copied' : ''}`}
              >
                {copied ? 'Copied!' : 'Copy Link'}
              </button>
            </div>

          ) : (

            <button 
              className={'copy-button'}
              onClick={() => generateReferral()}
            >
              Generate Referral
            </button>

          )}

        </div>
        
        <p className="info-text">
          When someone signs up using your referral link, you'll both get rewards!
        </p>
      </div>
    </div>
  )
}

export default Referral;