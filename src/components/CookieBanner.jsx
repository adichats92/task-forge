import { useState, useEffect } from 'react';
import { Alert, Button } from 'react-bootstrap';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  const handleAccept = () => {
    setShowBanner(false);
    localStorage.setItem('cookieAccepted', 'true');
  };

  useEffect(() => {
    const isCookieAccepted = localStorage.getItem('cookieAccepted');
    if (isCookieAccepted) {
      setShowBanner(false);
    }
  }, []);

  return (
    <>
      {showBanner && (
        <Alert variant="warning" className="fixed-bottom m-0 p-3">
          🍪 This website uses cookies to ensure you get the best experience on our website.{' '}
          <Button onClick={handleAccept} variant="outline-primary" size="sm">
            Accept
          </Button>
        </Alert>
      )}
    </>
  );
};

export default CookieBanner;
