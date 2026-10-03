import { useEffect } from 'react';

const SEAL_SRC = 'https://seal.atlas.globalsign.com/gss/one/seal?image=seal_100-50_en.png';

const GlobalSignSeal = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = SEAL_SRC;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <div
      id="ss_gmo_globalsign_secured_site_seal"
      onContextMenu={(e) => e.preventDefault()}
      style={{ width: 100, height: 50 }}
    >
      <img
        id="ss_gmo_globalsign_img"
        src="data:image/gif;base64,R0lGODlhAQABAGAAACH5BAEKAP8ALAAAAAABAAEAAAgEAP8FBAA7"
        alt=""
        onClick={() => (window as unknown as { ss_open_profile?: () => void }).ss_open_profile?.()}
        style={{ cursor: 'pointer', border: 0, width: '100%' }}
      />
    </div>
  );
};

export default GlobalSignSeal;
